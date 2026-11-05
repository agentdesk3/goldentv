// Development-only extraction: never writes to the V6 source.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const source = fs.readFileSync(path.join(__dirname, '../public/cinematic-runtime-candidate-v6.js'), 'utf8');
const parsed = ts.createSourceFile('v6.js', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
const mounts = parsed.statements.filter(s => ts.isExpressionStatement(s) && ts.isCallExpression(s.expression) && s.expression.expression.getText(parsed) === 'mount');
if (mounts.length !== 9) throw new Error('Expected exactly nine V6 initializers');
const f = ts.factory;
const id = name => f.createIdentifier(name);
const prop = (obj, name) => f.createPropertyAccessExpression(id(obj), name);
const call = (obj, name, args) => f.createCallExpression(prop(obj, name), undefined, args);
const transformed = ts.transform(mounts, [context => {
  function visit(node) {
    // React's explicit destroy owns media cleanup; pagehide must not revert it independently.
    if (ts.isExpressionStatement(node) && ts.isCallExpression(node.expression) &&
      node.expression.expression.getText(parsed) === 'window.addEventListener' &&
      node.expression.arguments[0]?.text === 'pagehide') return undefined;
    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)) {
      const expression = node.expression;
      const receiver = expression.expression.getText(parsed);
      if (expression.name.text === 'addEventListener') {
        const args = node.arguments.map(a => ts.visitNode(a, visit));
        return receiver === 'window'
          ? f.createCallExpression(id('eventListen'), undefined, args)
          : call('owner', 'listen', [ts.visitNode(expression.expression, visit), ...args]);
      }
      if (['then', 'catch'].includes(expression.name.text)) {
        return f.updateCallExpression(node, ts.visitNode(expression, visit), node.typeArguments,
          node.arguments.map(a => call('owner', 'guard', [ts.visitNode(a, visit)])));
      }
      if (receiver === 'window' && expression.name.text === '__cinematicTrackGsapMedia') {
        return f.createCallExpression(id('trackMedia'), undefined, node.arguments.map(a => ts.visitNode(a, visit)));
      }
    }
    if (ts.isPropertyAccessExpression(node) && node.getText(parsed) === 'window.__cinematicTracking') return id('owner');
    if (ts.isIdentifier(node) && ['innerHeight', 'scrollX', 'scrollY'].includes(node.text) &&
      !(ts.isPropertyAccessExpression(node.parent) && node.parent.name === node)) return prop('viewport', node.text);
    return ts.visitEachChild(node, visit, context);
  }
  return node => ts.visitNode(node, visit);
}]);
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
const body = transformed.transformed.map(s => printer.printNode(ts.EmitHint.Unspecified, s, parsed)).join('\n');
const output = '// V6 choreography; listener ownership, async guards, viewport access and pagehide cleanup adapted.\n' +
  'export function initializeSections({ mount, layoutRect, gsap, ScrollTrigger, matchMedia, viewport, owner, trackMedia, eventListen }) {\n' + body + '\n}\n';
const target = path.join(__dirname, 'sections.mjs');
if (process.argv.includes('--check')) require('node:assert/strict').equal(fs.readFileSync(target, 'utf8'), output);
else fs.writeFileSync(target, output);
transformed.dispose();
console.log('PASS: nine V6 initializers extracted with only documented lifecycle adaptations');
