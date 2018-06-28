const webpack = require('webpack')
const path = require('path')

module.exports = {
    devtool:'inline-sourcemap',
    entry:'./client/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/(node_modules)/,
                query:{
                    presets:['react','es2015','stage-3'],
                }
            },
            {
                test:/\.css/,
                use:['style-loader', 'css-loader']
            },
            {
                test:/\.(jpg|png)/,
                use:'file-loader'
            }
            

        ]
    },
   
}