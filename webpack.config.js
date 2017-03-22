import path from 'path';
import webpack from 'webpack';

export default {
	devtools: 'eval-source-map',
	entry: [
		path.join(__dirname, 'client/index.jsx'),
	],
	output: {
		path: '/',
		publicPath: '/'
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			include: path.join(__dirname, 'client'),
			loaders: ['babel']
		}]
	},
	resolve: {
		extentions: ['', '.js']
	}
}
