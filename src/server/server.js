var webpack = require('webpack');
var webpackConfig = require('../../webpack.config');
var compiler = webpack(webpackConfig);

const express = require('express');
const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

// TODO: Activate serving from public folder in production mode
if (false) {
    app.use(express.static(__dirname + '/public'));
}

app.listen(3000, () => {
    console.log('App running on port 3000');
});