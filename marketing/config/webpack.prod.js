const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commConfig = require('./webpack.common');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: 'marketing/latest/',
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: { './MarketingIndex': './src/bootstrap' },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commConfig, prodConfig);
