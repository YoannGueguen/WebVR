const path = require('path');

module.exports = (config) => {
    if(!config.resolve) {
        config.resolve = {};
    }

    config.resolve.alias = {
        'vue$': 'vue/dist/vue.esm.js',

        '@components': path.resolve(__dirname, './../assets/js/components/'),
        '@modules': path.resolve(__dirname, './../assets/js/modules/'),
        '@fonts': path.resolve(__dirname, './../assets/fonts/'),
        '@sass': path.resolve(__dirname, './../assets/sass/'),
        '@img': path.resolve(__dirname, './../assets/img/'),
        '@js': path.resolve(__dirname, './../assets/js/'),
        '@root': path.resolve(__dirname, './../'),

        'mixins': path.resolve(__dirname, './../assets/sass/mixins/_mixins.scss'),
        'variables': path.resolve(__dirname, './../assets/sass/_variables.scss'),
        'sass': path.resolve(__dirname, './../assets/sass/'),
        'fonts': path.resolve(__dirname, './../assets/fonts/'),
    }
};