module.exports = {
	entry: './index.js',

	output: {
		filename: 'bundle.js',
		path: 'public'
	},

	module: {
		loaders: [
			{test:/\.(js|jsx)$/, exclude: /node_modules/, loader:'babel-loader?presets[]=es2015&presets[]=react'},
			{test:/\.(less|css)$/, loader: "style!css!less" },
			{test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'}
		]
	}
}