const path = require('path');
const webpack = require('webpack')
const { merge } = require('webpack-merge');
const base = require('../../webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcPath = path.resolve(__dirname, 'src');

module.exports = merge(base, {
  entry: {
    app: './src/js/index.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {}
    })
  ],
  resolve: {
    alias: {
      '@actions': `${srcPath}/js/actions`,
      '@components': `${srcPath}/js/components`,
      '@constants': `${srcPath}/js/constants`,
      '@containers': `${srcPath}/js/containers`,
      '@reducers': `${srcPath}/js/reducers`,
      '@sagas': `${srcPath}/js/sagas`,
      '@store': `${srcPath}/js/store`,
      '@utils': `${srcPath}/js/utils`,
      '@css': `${srcPath}/css`,
    },
  },
});
