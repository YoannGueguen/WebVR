const path = require('path');

module.exports = (config) => {
    config.devServer = {
        contentBase: path.resolve(__dirname, './../public'),
        port: 9000,
        historyApiFallback: true,
        stats: {
            modules: false
        }
    };
};