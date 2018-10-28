const loaders = require('./loaders'),
      path    = require('path');

module.exports = (config) => {
    if(!config.module) {
        config.module = {};
    }

    config.module.rules = [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ],
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        },
        {
            test: /\.sass$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader?indentedSyntax'
            ],
        },
        {
            test: /\.obj$/,
            loader: 'raw-loader',
            include: [
                path.resolve(__dirname, './../assets/models')
            ]
        },
        {
            test: /\.(mtl|dds|jpg|tga|png|bmp)$/,
            loader: 'file-loader',
            include: [
                path.resolve(__dirname, './../assets/models')
            ],
            options: {
                name: 'models/[name].[ext]'
            }
        },
        {
            test: /\.html$/,
            loader: 'html-loader',
            options: {
                minimize: true,
                caseSensitive: true
            }
        },
        {
            test: /\.tsx?$/,
            ...loaders.typeScriptLoader
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(ttf|eot|otf|woff2?|svg)$/,
            loader: 'file-loader',
            include: [
                path.resolve(__dirname, './../assets/fonts'),
                /node_modules/
            ],
            options: {
                name: 'fonts/[name].[ext]',
            },
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'file-loader?name=img/[name].[ext]?[hash]',
            exclude: [
                path.resolve(__dirname, './../assets/models')
            ]
        }
    ];
};