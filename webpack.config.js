const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const development = process.env.NODE_ENV !== 'production';

const prodEntry = './src/client/index.js'
const devEntry = ['webpack-hot-middleware/client', 'react-hot-loader/patch', prodEntry]

const prodPlugins = [
    new HtmlWebpackPlugin({
        template: './src/client/index.html',
        filename: 'index.html'
    })
];
const devPlugins = prodPlugins.concat(new webpack.HotModuleReplacementPlugin());

module.exports = {
    cache: true,
    devtool: 'source-map',
    entry: development ? devEntry : prodEntry,
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: ''
    },
    plugins: development ? devPlugins : prodPlugins,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}