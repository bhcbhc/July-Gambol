/**
 * Created by Ninghai on 2017/7/5.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const extractCommonCss = new ExtractTextPlugin('[name]_common.css');
const extratPrivateCss = new ExtractTextPlugin('[name]_private.css');

module.exports = {
    entry: {
        app: './src/index.js',
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
        }, //共有样式
            {
                test: /\.scss/,
                include: path.resolve(__dirname, 'src/styles'),
                use: extractCommonCss.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader', options: {
                            minimize: true,
                            importLoaders: 1
                        }
                    }, {
                        /*                        loader: 'postcss-loader', options: {
                         plugins: (loader) => [require('precss')(), require('autoprefixer')(), require('rucksack-css')()]
                         }*/
                        loader: 'sass-loader'
                    }]
                })
            },//私有样式
            {
                test: /\.scss/,
                include: path.join(__dirname, 'src/js'),
                use: extratPrivateCss.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader', options: {
                            modules: true, //启动css modules
                            minimize: true, //压缩css代码
                            importLoaders: 1, //在css-loader 之前loader的数目
                            localIdentName: '[local]___[hash:base64:5]' //设置css-modules模式下的local类名的变量
                        }
                    }, {
              /*          loader: 'postcss-loader', options: {
                            plugins: (loader) => [require('precss'), require('autoprefixer'), require('rucksack-css')]
                        }*/
                         loader:'sass-loader'
                    }]
                })
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
                        limit: 8192
                    }
                }]
            }
        ]
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
            chunks: ['bundle', 'app'],
            hash: true,
            inject: 'body'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8888'
        }),
        extractCommonCss,
        extratPrivateCss
    ],
    devServer: {
        contentBase: './',
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0'
    }
};