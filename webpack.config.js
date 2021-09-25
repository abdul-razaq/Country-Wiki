const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.svg$/, use: 'svg-inline-loader' },
			{
				test: /\.module\.s(a|c)ss$/,
				use: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: isDevelopment,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDevelopment,
						},
					},
				],
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /\.module.(s(a|c)ss)$/,
				use: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDevelopment,
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'production',
		}),
		new MiniCssExtractPlugin({
			filename: isDevelopment ? '[name].css' : '[name].[fullhash].css',
			chunkFilename: isDevelopment ? '[id].css' : '[id].[fullhash].css',
		}),
	],
	mode: isProduction ? 'production' : 'development',
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
};
