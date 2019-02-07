const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');

const utils = require('../utils');

exports.config = merge([
  {
    plugins: [
      new CopyWebpackPlugin(
        [
          {
            from: 'node_modules/viewar-core/viewar-core.js',
            to: 'viewar-core.js',
          },
        ],
        {
          copyUnmodified: true,
        }
      ),
    ],
  },
  utils.setFreeVariable('process.env.NODE_ENV', 'core'),
]);
