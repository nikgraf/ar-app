const merge = require('webpack-merge');
const ip = require('ip').address();
const webpack = require('webpack');

const { setFreeVariable, buildPath } = require('../utils');

exports.config = merge([
  {
    devServer: {
      public: ip ? `${ip}:${process.env.PORT || '8080'}` : undefined,
      host: process.env.HOST || '0.0.0.0',
      port: process.env.PORT,
      contentBase: buildPath,
      hot: true,
    },
    devtool: 'inline-source-map',
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  },
  setFreeVariable('process.env.NODE_ENV', 'development'),
]);
