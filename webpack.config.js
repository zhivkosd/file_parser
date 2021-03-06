module.exports = {
    entry: __dirname + '/src/app/index.js',
    output: {
        path: __dirname + 'dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    devServer: {
        contentBase: './src/public',
        port: 7700
    }
}