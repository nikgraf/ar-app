const webpack = require('webpack');
const path = require('path');

const setFreeVariable = (key, value) => {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [new webpack.DefinePlugin(env)],
  };
};

const root = path.join(__dirname, '..');
const srcPath = path.join(root, 'src');
const buildPath = path.join(root, 'build');

module.exports = {
  setFreeVariable,
  srcPath,
  buildPath,
};
