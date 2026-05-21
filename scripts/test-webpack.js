const wp = require('/root/penang-wild-roam-taro/node_modules/webpack');
try {
  const pp = new wp.ProgressPlugin({});
  console.log('ok');
} catch(e) {
  console.log('error:', e.message);
}
