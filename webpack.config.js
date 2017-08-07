const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');

const hotMiddlewareScript = 'webpack-hot-middleware/client?timeout=20000&reload=true';

// Modules
const devServer = require('./webpack/dev-server');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const babel = require('./webpack/babel');
const define = require('./webpack/define');

const PATHS = {
    source: {
        visitor: path.join(__dirname, 'client', 'visitor'), 
        admin: path.join(__dirname, 'client', 'admin'),
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
        output: {
            path: PATHS.build,
            filename: './js/[name].js'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    },
    images(),
    babel()
]);

options.development = merge([
    devServer(),
    {
        entry: {
            visitor: [path.resolve(`${PATHS.source.visitor}/visitor.jsx`), hotMiddlewareScript],
            admin: [path.resolve(`${PATHS.source.admin}/admin.jsx`), hotMiddlewareScript]
        }
    }
]);

options.production = merge([
    define(),
    uglifyJS(),
    {
        entry: {
            visitor: path.resolve(`${PATHS.source.visitor}/visitor.jsx`),
            admin: path.resolve(`${PATHS.source.admin}/admin.jsx`)
        }
    }
]);

module.exports = function(env) {
    return env === 'production' 
        ? merge([ options.common, options.production ])
        : merge([ options.common, options.development ]);
};
