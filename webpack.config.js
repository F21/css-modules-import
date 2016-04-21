var webpack = require('webpack');
const path = require('path')

module.exports = {

    entry: {
        app: ['./src/app.js'],
    },

    output: {
        path: __dirname + '/build',
        filename: '[name].js',
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[hash:base64:20]!postcss-loader'}
        ]
    },

    postcss: function (webpack) {
        return [
            require('postcss-import')({path: __dirname+"/src"}),
            require('postcss-cssnext')(),
        ];
    },

    resolve: {
        modulesDirectories: [
            "node_modules",
            __dirname
        ]
    }
};