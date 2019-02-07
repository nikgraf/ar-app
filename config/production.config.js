const merge = require('webpack-merge');
const { setFreeVariable, buildPath } = require('./utils');

exports.config = merge([
  {
    output: {
      path: buildPath,
      chunkFilename: '[name].js',
      filename: '[name].js',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            priority: 1,
          },
        },
      },
    },
  },
  setFreeVariable('process.env.NODE_ENV', 'production'),
]);
