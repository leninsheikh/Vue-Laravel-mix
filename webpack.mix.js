const mix = require('laravel-mix');
const webpack = require('./webpack.config.js');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/app.js', 'public/assets/js')
    .sass('src/assets/sass/app.scss', 'public/assets/css')
    .copyDirectory('src/assets/images', 'public/assets/images')
    .webpackConfig(Object.assign(webpack));
