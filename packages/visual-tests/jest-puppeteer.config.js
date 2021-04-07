const getConfig = require('jest-puppeteer-docker/lib/config');

const baseConfig = getConfig();
const customConfig = Object.assign({}, baseConfig);

customConfig.connect.defaultViewport = {
  width: 1024,
  height: 768,
};

customConfig.chromiumFlags = ['–ignore-certificate-errors'];

module.exports = customConfig;
