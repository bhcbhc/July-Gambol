/**
 * Created by Ninghai on 2017/7/4.
 */
const path=require('path');
const webpack=require('webpack');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

const extractCss=new ExtractTextPlugin('dist/all.css');

module.exports= {
    devtool:'cheap-module-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        './src/js/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'http://localhost:8888/'
    },
    resolve:{
        extension:['.','.js','jsx']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel'],
                exclude:/node_modules/
            },{
                test:/\.css$/,
                use:ExtractTextPlugin.extract('style-loader','css-loader'),
                exclude:/node_modules/
            },{
            test:/\.(png|svg|jpg|gif)$/,
            use:[
                'file-loader'
            ]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        extractCss
    ]
};
