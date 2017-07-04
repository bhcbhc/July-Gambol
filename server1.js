/**
 * Created by Ninghai on 2017/7/4.
 */
const webpack=require('webpack')
const WebpackDevServer=require('webpack-dev-server')
const config=require('./webpack-dev-config-devserver')

new WebpackDevServer(webpack(config),{
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true
}).listen(8888,'localhost',function (err,result) {
    if(err){
        return  console.error(err)
    }
    console.log('listen at http://localhost:8888/')
})

