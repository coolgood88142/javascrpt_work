const path = require('path');
var webpack = require('webpack');

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
			}
		]
	}
};

//