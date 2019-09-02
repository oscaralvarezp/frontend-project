const HtmlWebpackPlugin = require('html-webpack-plugin');// require de html-webpack-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // require de mini-css-extract-plugin

module.exports = {
	// donde se encuentra mi code js de origen 
	entry: './src/App.js',
	// Donde generare el archivo final para produccion(salida)
	output: {
		//carpeta donde guardara el archivo
		path: __dirname + '/build',
		// archivo que generara
		filename: 'bundle.js'
	},
	// defino el puerto donde se ejecutara el servidor de desarrollo
	devServer: {
		port: 3000
	},
	// loaders para transpilar codigo .scss(Sass) a .css
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			}
		]
	},
	// defino que archivo html empaquetar y si sera minificado con esta config
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'bundle.css'
		})
	]
}