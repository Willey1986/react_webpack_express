var webpack = require('webpack');
var webpackConfig = require('../../webpack.config');
var compiler = webpack(webpackConfig);

const express = require('express');
const app = express();

const chokidar = require('chokidar');

chokidar.watch(__dirname, {ignored: /index\.js$/})
    .on('change', (path) => {
        console.log(`Clearing ${path} module cache from server`);
        if (require.cache[path]) 
            delete require.cache[path];
});

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

// TODO: Activate serving from public folder in production mode
if (false) {
    app.use(express.static(__dirname + '/public'));
}

app.use('/api/users', (req, res, next) => {
    require('./api/users')(req, res, next);
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});