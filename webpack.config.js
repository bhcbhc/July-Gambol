/**
 * Created by Ninghai on 2017/7/5.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const extractTextCss = new ExtractTextPlugin('app.css');

module.exports = {
    entry: {
        app: './src/js/index.js',
        bundle: [
            'react', 'react-dom'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.scss', '.css']
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'react-hot-loader'
            }, {
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-runtime']
                }
            }]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}),
            exclude: /node_modules/
        },
            //共有样式
            {
                test: /\.scss/,
                include: path.resolve(__dirname, 'src/styles'),
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','scss-loader']
                })
            }]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'template.html'),
            title: "三国杀V1.0",
            favicon: path.join(__dirname, 'src/favicon.ico'),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            hash: true,
            inject: 'body'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8888'
        }),
        extractTextCss
    ],
    devServer: {
        contentBase: './',
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0'
    }
};