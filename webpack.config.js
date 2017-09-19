const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            title: 'TITLE',
            filename: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public', 'js')
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}