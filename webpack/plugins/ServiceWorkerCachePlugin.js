const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = new SWPrecacheWebpackPlugin({
    filename: 'service-worker.js',
    minify: true,
    stripPrefixMulti: {
        'public/': '/'
    },
    staticFileGlobs: [
        'public/**/*.*'
    ],
});
