/**
 * Created by Ninghai on 2017/7/4.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')

const extractCss = new ExtractTextPlugin('dist/all.css');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: './src/js/index.js',
        bundle: ['react', 'react-dom']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFileName:'[name].js',
        publicPath: 'http://localhost:8888/'
    },
    resolve: {
        extension: ['.', '.js', 'jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'react-hot-loader'
                }, {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-0'],
                        plugins: ['transform-runtime']
                    }
                }],
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                exclude: /node_modules/
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new OpenBrowserWebpackPlugin({
            url: 'http://localhost:8888/'
        }),
        extractCss
    ]
};
