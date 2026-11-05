const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const sharp = require('sharp');
const directory = path.join(__dirname, 'artifacts');
(async () => {
  const evidence = JSON.parse(fs.readFileSync(path.join(directory, 'browser-evidence.json'), 'utf8'));
  assert.equal(evidence.scenarios.length, 18, 'Expected nine scenarios at each width');
  let passed = 0;
  for (const scenario of evidence.scenarios) {
    assert(scenario.results.every(result => result.passed), 'Scenario failed: ' + scenario.scenario);
    assert.equal(scenario.runtimeErrors.length, 0, 'Unexpected runtime error');
    assert(scenario.networkErrors.every(event => scenario.scenario === 'failure' && event.params.entry.url.includes('/vendor/ScrollTrigger.min.js') && event.params.entry.text.includes('503')), 'Unexpected network error');
    passed += scenario.results.length;
  }
  assert.equal(evidence.visual.length, 10, 'Expected five capture pairs per width');
  for (const item of evidence.visual) {
    const prefix = item.viewport + '-' + item.section;
    const a = await sharp(path.join(directory, prefix + '-reference.png')).removeAlpha().raw().toBuffer();
    const b = await sharp(path.join(directory, prefix + '-candidate.png')).removeAlpha().raw().toBuffer();
    item.exactPixelEquality = a.equals(b);
    assert.equal(item.changedPixels, 0, 'Visual difference exceeds 16/255 channel threshold: ' + prefix);
    console.log(`PASS: ${prefix}: threshold differences ${item.changedPercent.toFixed(6)}%, exact pixel equality ${item.exactPixelEquality}`);
  }
  const candidates = evidence.requests.filter(request => request.path.startsWith('/vendor/') && request.referer.includes('case='));
  for (const scenario of ['strict', 'late', 'failure', 'invalid', 'timeout', 'replaced', 'mount-failure', 'duplicate']) {
    for (const viewport of ['desktop', 'mobile']) {
      const requests = candidates.filter(request => {
        const params = new URL(request.referer).searchParams;
        return params.get('case') === scenario && params.get('viewport') === viewport;
      });
      // A visual-only run retains prior scenario results but has a new request log.
      if (!requests.length && process.argv.includes('--visual-only')) continue;
      assert.equal(requests[0]?.path, '/vendor/gsap.min.js', 'GSAP did not load first');
      assert(requests.findIndex(request => request.path === '/vendor/ScrollTrigger.min.js') > 0, 'ScrollTrigger request order wrong');
      assert.equal(requests.filter(request => request.path === '/vendor/gsap.min.js').length, 1, 'Duplicate GSAP request');
    }
  }
  evidence.summary = { scenarioPages: evidence.scenarios.length, assertionGroupsPassed: passed, visualPairs: evidence.visual.length,
    runtimeErrors: 0, exactVisualPairs: evidence.visual.filter(item => item.exactPixelEquality).length };
  fs.writeFileSync(path.join(directory, 'browser-evidence.json'), JSON.stringify(evidence, null, 2) + '\n');
  console.log(`PASS: ${passed} browser assertion groups, 18 pages, ordered local scripts and ten visual pairs`);
})().catch(error => { console.error(error); process.exitCode = 1; });
