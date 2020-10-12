const path = require('path');
const { merge } = require('webpack-merge');
const base = require('../../webpack.base');
const srcPath = path.resolve(__dirname, './src/js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
    entry: {
        app: './src/js/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: './sytle.[contenthash].css',
            ignoreOrder: true,
        }),
    ],
    resolve: {
        alias: {
            '@actions': path.resolve(__dirname, 'src/js/actions'),
            '@components': path.resolve(__dirname, 'src/js/components'),
            '@containers': path.resolve(__dirname, 'src/js/containers'),
            '@reducers': path.resolve(__dirname, 'src/js/reducers'),
            '@sagas': path.resolve(__dirname, 'src/js/sagas'),
            '@store': path.resolve(__dirname, 'src/js/store'),
            '@utils': path.resolve(__dirname, 'src/js/utils'),
        },
    },
});
