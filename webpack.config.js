const path = require('path');

module.exports = {
	entry: './src/main.js',
	resolve: {
		extensions: [ '.js' ]
	},
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: false,
		port: 6969
	}
};
