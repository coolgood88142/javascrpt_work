const path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// 建立一個 extract text plugin 的實例
var extractPlugin = new ExtractTextPlugin({
   filename: 'bundle.css' // scss轉css後另存的目標檔名
});

module.exports = {
	entry: './app.js',						//入口指定entry.js檔案
    output: {
        filename: 'bundle.js',					//輸出bundle.js檔案
        path: path.resolve(__dirname, './'),
    },
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
            {
                test: /\.scss$/,
                use: extractPlugin.extract({ //利用 extractPlugin 實例裡的 extract 來建立 Loader
                    use: [
                        'css-loader', 
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, // 注意要排除 node_modules
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            },
		]
	},
    plugins: [
        new webpack.optimize.UglifyJsPlugin(function(){
            // ...
        }),
        extractPlugin,
        new webpack.ProvidePlugin({ // 利用 webpack.ProvidePlugin 讓 $ 和 jQuery 可以連結到 jquery library
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            // Tether: 'tether', //4.0.0-alpha.6
            // tether: 'tether', //4.0.0-alpha.6
            Popper: ['popper.js', 'default'] //4.0.0-beta
        }),
    ]
};

//