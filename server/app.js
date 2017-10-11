import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV.indexOf('development') != -1) {
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');

    const compiler = webpack(require('../webpack.config')('development'));

    app.use(webpackDevMiddleware(compiler, { noInfo: true }));
    app.use(require("webpack-hot-middleware")(compiler, { log: console.log }));
}

// static routes
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', require('./routes/api'));

// all other routes go to 'home'
app.use('*', require('./routes/visitor'));

module.exports = app;
