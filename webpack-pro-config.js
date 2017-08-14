/**
 * Created by Ninghai on 2017/7/5.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCommonCss = new ExtractTextPlugin('css/[name]_common.css');
const extratPrivateCss = new ExtractTextPlugin('css/[name]_private.css');

module.exports = {
    entry: {
        app: './src/index.js',
        bundle: [
            'react', 'redux'
        ]
    },
    output: {
        filename: 'js/[name].min.js',
        path: path.join(__dirname, 'dist'),
        chunkFilename: 'js/[name].min.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.scss', '.css']
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            include: path.join(__dirname, 'src'),
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
                include: path.resolve(__dirname, 'src/styles'),
                use: extractCommonCss.extract({
                    fallback: 'style-loader',
                    use: [{
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
                        // loader: 'sass-loader'
                        loader: 'postcss-loader', options: {
                            plugins: [require('precss'), require('autoprefixer'), require('rucksack-css')],
                            parser: 'postcss-scss'
                        }
                    }]
                })
            },
/*            {
                test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
                use: [{
                    loader: 'url-loader', options: {
                        limit: 8192
                    }
                }]
            },*/ {
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
        //优化编译好的js，频率高的用短id
        new webpack.optimize.OccurrenceOrderPlugin(),
        //压缩
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        //产品模式
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'template.html'),
            title: "GambolScreen",
            filename:'index.html',
            favicon: path.join(__dirname, 'src/favicon.ico'),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks: ['bundle', 'app'],
            hash: true,
            inject: 'body'
        }),
        extractCommonCss,
        extratPrivateCss
    ]
};