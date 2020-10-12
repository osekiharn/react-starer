const path = require('path');
const webpack = require('webpack');
// const precss = require('precss');
// const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

// require('dotenv').config();

module.exports = {
    plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin(), new HardSourceWebpackPlugin()],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: [/node_modules/, /dist/],
                loader: 'eslint-loader',
                options: {
                    fix: true,
                    configFile: '.eslintrc.json',
                },
            },
            {
                test: /.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                        },
                    },
                    // {
                    // 	loader: 'postcss-loader',
                    // 	options: {
                    // 		plugins: function() {
                    // 			return [precss, autoprefixer];
                    // 		}
                    // 	}
                    // },
                    {
                        loader: 'sass-loader',
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/,
                },
            },

            chunks: 'all',
            minChunks: 1,
            minSize: 30000,
            name: true,
        },
    },
};
