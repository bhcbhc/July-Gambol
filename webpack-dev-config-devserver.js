/**
 * Created by Ninghai on 2017/7/4.
 */
/**
 * Created by Ninghai on 2017/7/4.
 */
const path=require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin');


module.exports= {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },{
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    }
};
