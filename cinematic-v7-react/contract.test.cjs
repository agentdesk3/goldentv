const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
function load(name) {
  const source = fs.readFileSync(path.join(__dirname, name), 'utf8');
  const result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX } });
  const module = { exports: {} };
  new Function('require', 'module', 'exports', result.outputText)(require, module, module.exports);
  return module.exports;
}
test('dependency loader imports safely without a DOM or vendor globals', () => {
  assert.equal(typeof load('load-dependencies.ts').loadCinematicDependencies, 'function');
});
test('client candidate uses a real effect and renders no markup', () => {
  const source = fs.readFileSync(path.join(__dirname, 'CinematicRuntimeClient.tsx'), 'utf8');
  const parsed = ts.createSourceFile('client.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  assert.equal(parsed.statements[0].expression.text, 'use client');
  let effect = false, nullReturn = false;
  function visit(node) {
    if (ts.isCallExpression(node) && node.expression.getText(parsed) === 'useEffect') effect = true;
    if (ts.isReturnStatement(node) && node.expression?.kind === ts.SyntaxKind.NullKeyword) nullReturn = true;
    ts.forEachChild(node, visit);
  }
  visit(parsed); assert(effect && nullReturn);
});
