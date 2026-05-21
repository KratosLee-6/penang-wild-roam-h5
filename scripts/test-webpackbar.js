const wp = require('/root/penang-wild-roam-taro/node_modules/webpack');
const WebpackBarPlugin = require('/root/penang-wild-roam-taro/node_modules/webpackbar');
try {
  const plugin = new WebpackBarPlugin({ reporters: ['basic', 'fancy'] });
  console.log('ok', typeof plugin);
} catch(e) {
  console.log('error:', e.message);
}
