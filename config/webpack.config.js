const merge = require('webpack-merge');

const common = require('./common.config');
const production = require('./production.config');
const develop = require('./develop/develop.config');
const mock = require('./develop/mock.config');
const core = require('./develop/core.config');

module.exports = env => {
  if (env === 'production') {
    console.log('using production mode');
    return merge(common.config, production.config);
  }

  if (env === 'development_mock') {
    console.log('using development mock mode');
    return merge(merge(common.config, develop.config), mock.config);
  }

  console.log('using development core mode');
  return merge(merge(common.config, develop.config), core.config);
};
