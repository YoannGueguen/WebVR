const path = require('path'),
      environment = require('./../env');

module.exports = (config) => {
    config.devServer = {
        contentBase: path.resolve(__dirname, './../public'),
        port: environment.DEV_SERVER_PORT,
        historyApiFallback: true,
        stats: {
            modules: false
        }
    };
};