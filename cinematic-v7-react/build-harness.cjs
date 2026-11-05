const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const Module = require('node:module');
const { webpack } = require('next/dist/compiled/webpack/webpack');
const { renderToString } = require('react-dom/server');
const output = path.join(__dirname, 'artifacts');
fs.mkdirSync(output, { recursive: true });
// Execute the existing synchronous Server Component with the installed JSX runtime.
// Its source remains untouched and is never included in the client bundle.
const original = path.resolve(__dirname, '../app/components/cinematic-home.tsx');
const compiled = ts.transpileModule(fs.readFileSync(original, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true }
});
const serverModule = new Module(original, module);
serverModule.filename = original; serverModule.paths = module.paths;
serverModule._compile(compiled.outputText, original);
fs.writeFileSync(path.join(output, 'server-markup.html'), renderToString(serverModule.exports.default()));
webpack({ mode: 'development', devtool: false, target: 'web',
  entry: path.join(__dirname, 'browser-tests.tsx'), output: { path: output, filename: 'harness.js' },
  module: { rules: [{ test: /\.tsx?$/, exclude: /node_modules/, use: path.join(__dirname, 'ts-loader.cjs') }] },
  resolve: { extensions: ['.tsx', '.ts', '.mjs', '.js', '.json'] },
}, (error, stats) => {
  if (error || stats.hasErrors()) { console.error(error || stats.toString({ all: false, errors: true })); process.exitCode = 1; }
  else console.log('PASS: isolated development React bundle and original Server Component markup generated');
});
