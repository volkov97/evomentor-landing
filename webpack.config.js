const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Modules
const devServer = require('./webpack/dev-server');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');

const PATHS = {
    source: {
        home: path.join(__dirname, 'source', 'home'),
        dashboard: path.join(__dirname, 'source', 'dashboard'),
    },
    build: path.join(__dirname, 'build')
};

let options = {
    common: {},
    development: {},
    production: {}
};

options.common = merge([
    {
        entry: {
            home: path.resolve(`${PATHS.source.home}/home.js`),
            dashboard: path.resolve(`${PATHS.source.dashboard}/dashboard.js`)
        },
        output: {
            path: PATHS.build,
            filename: './js/[name].js'
        },
        plugins: [
            // Home HTML
            new HtmlWebpackPlugin({
                chunks: ['home', 'common'],
                template: path.resolve(`${PATHS.source.home}/home.pug`),
                filename: 'home.html'
            }),
            // Dashboard HTML
            new HtmlWebpackPlugin({
                chunks: ['dashboard', 'common'],
                template: path.resolve(`${PATHS.source.dashboard}/dashboard.pug`),
                filename: 'dashboard.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            })
        ]
    },
    pug(),
    images()
]);

options.development = merge([
    devServer(),
    sass(),
    css()
]);

options.production = merge([
    extractCSS(),
    uglifyJS()
]);

module.exports = function(env) {
    return env === 'production' 
        ? merge([ options.common, options.production ])
        : merge([ options.common, options.development ]);
};
