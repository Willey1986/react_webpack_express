console.log(process.env.NODE_ENV);
const development = process.env.NODE_ENV !== 'production';
const express = require('express');
const app = express();

if (development) {
    const webpack = require('webpack');
    const webpackConfig = require('../../webpack.config');
    const compiler = webpack(webpackConfig);
    const chokidar = require('chokidar');

    chokidar.watch(__dirname, {ignored: /server\.js$/})
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
}
else {
    app.use(express.static(__dirname + '/../../public'));
}



app.use('/api/users', (req, res, next) => {
    require('./api/users')(req, res, next);
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});