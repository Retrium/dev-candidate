var webpack = require('webpack');
var path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		app: [
			'webpack-hot-middleware/client?path=/__webpack_hmr?timeout=20000',
			'./src/client/index.jsx',
		],
	},
	output: {
		filename: '[name].js',
		publicPath: '/',
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	resolve: {
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},
		modules: ['node_modules', path.resolve(__dirname, 'src')],
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /(\.js|\.jsx)$/,
				include: [
					path.resolve(__dirname, 'src'),
					path.resolve(__dirname, 'node_modules'),
				],
				exclude: [/\/@babel/],
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							presets: [
								require('@babel/preset-react'),
								[
									require('@babel/preset-env'),
									{
										modules: 'cjs',
									},
								],
							],
							plugins: [require('@babel/plugin-transform-runtime')],
						},
					},
				],
			},
		],
	},
};
