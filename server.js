/**
 * Created by Ninghai on 2017/7/4.
 */
const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack-dev-config');

const compiler = webpack(config);

browserSync({
    port: 8888,
    ui: {
        port: 8889
    },
    server: {
        baseDir: 'src',
        middleware: [
            historyApiFallback(),
            webpackDevMiddleware(compiler, {
                publicPath: "/",
                noInfo: false,
                quiet: false,
                stats: {
                    assets: false,
                    colors: true,
                    version: false,
                    hash: false,
                    timings: false,
                    chunks: false,
                    chunkModules: false
                }
            }),
            webpackHotMiddleware(compiler)
        ]
    },
    files: [
        'src/*.html'
    ]
});

