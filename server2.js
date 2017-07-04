/**
 * Created by Ninghai on 2017/7/4.
 */
const path=require('path')
const webpack=require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-dev-middleware');
const express = require('express')

const config = require('./webpack-dev-config');

const complier=webpack(config);

const app=new express();
const port=8888;

app.use(webpackDevMiddleware(complier,{
    noInfo: true,
    // 如果false，将会给你列出一大堆无聊的信息。

    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(complier));

app.get('*',function (req,res) {
    res.sendFile(path.join(__dirname,"index.html"));
});

app.listen(port,function (error) {
    if(error){
        console.error(error)
    }else{
        console.info("linstening at localhost://%s/",port)
    }
})
