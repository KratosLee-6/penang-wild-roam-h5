const fs = require('fs');
const path = require('path');

const runnerNodeModules = path.join(__dirname, '..', 'node_modules', '@tarojs', 'webpack5-runner', 'node_modules');

const nestedWebpackbar = path.join(runnerNodeModules, 'webpackbar');
const rootWebpackbar = path.join(__dirname, '..', 'node_modules', 'webpackbar');

if (fs.existsSync(nestedWebpackbar)) {
  const stats = fs.statSync(nestedWebpackbar);
  if (stats.isDirectory() || stats.isSymbolicLink()) {
    const pkg = path.join(nestedWebpackbar, 'package.json');
    if (fs.existsSync(pkg)) {
      const pkgJson = JSON.parse(fs.readFileSync(pkg, 'utf8'));
      if (pkgJson.version !== '5.0.0') {
        console.log(`[fix-nested-webpackbar] Patching nested webpackbar ${pkgJson.version} -> 5.0.0`);
        fs.rmSync(nestedWebpackbar, { recursive: true, force: true });
        fs.symlinkSync(rootWebpackbar, nestedWebpackbar, 'junction');
      }
    }
  }
}
