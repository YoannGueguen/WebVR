const webpack = require('webpack');

module.exports = (config) => {
    config.plugins = [
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ];
};