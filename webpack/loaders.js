module.exports = {
    typeScriptLoader: {
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
            appendTsSuffixTo: [/\.vue$/],
        }
    }
};
