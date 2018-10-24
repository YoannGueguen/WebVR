const path = require('path');

module.exports = (config) => {
    config.output = {
        path: path.resolve(__dirname, './../public'),
        publicPath: '/',
        filename: '[name].js?[hash]'
    };
};