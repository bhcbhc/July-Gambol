/**
 * Created by Ninghai on 2017/7/5.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        bundle: [
            'react', 'react-dom'
        ]
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path:`${__dirname}/dist`
    },
    resolve: {
        extensions: ['.js', '.json', '.scss']
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: `${__dirname}/src/`,
            use: [{
                loader: 'react-hot-loader'
            }, {
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-runtime']
                }
            }]
        }, //共有样式
            {
                test: /\.scss/,
                include: `${__dirname}/src/styles`,
                use: ['style-loader', {
                    loader: 'css-loader', options: {
                        minimize: true,
                        importLoaders: 1
                    }
                }, {
                    loader: 'postcss-loader', options: {
                        plugins: [require('precss')(), require('autoprefixer')(), require('rucksack-css')()],
                        parser: "postcss-scss"
                    }
                }]
            },//私有样式
            {
                test: /\.scss/,
                include: `${__dirname}/src/js`,
                use: ['style-loader', {
                    loader: 'css-loader', options: {
                        modules: true, //启动css modules
                        minimize: true, //压缩css代码
                        importLoaders: 1, //在css-loader 之前loader的数目
                        localIdentName: '[local]___[hash:base64:5]' //设置css-modules模式下的local类名的变量
                    }
                }, {
                    // loader: 'sass-loader'
                    loader: 'postcss-loader', options: {
                        plugins: [require('precss'), require('autoprefixer'), require('rucksack-css')],
                        parser: 'postcss-scss'
                    }
                }]
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
                use: [{
                    loader: 'url-loader', options: {
                        limit: 8192
                    }
                }]
            }, {
                test: /\.(gif|jpe?g|png|ico)$/,
                use: [{
                    loader: 'url-loader', options: {
                        limit: 1000
                    }
                }]
            }
        ]
    },
    plugins: [
/*        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
            __DEV__: true
        }),*/
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'template.html'),
            title: "三国杀V1.0",
            filename:'index.html',
            favicon: path.join(__dirname, 'src/favicon.ico'),
/*            minify: {
                removeComments: true,
                collapseWhitespace: true
            },*/
            chunks: ['bundle', 'app'],
            hash: true,
            inject: 'body'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        //extractCommonCss,
        //  extratPrivateCss
    ],
    devServer: {
        contentBase: './',
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0'
    }
};