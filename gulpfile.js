var elixir = require('laravel-elixir');
require('./tasks/frontend.task.js');
require('./tasks/bower.task.js');
require('./tasks/ngHtml2Js.task.js');
require('laravel-elixir-livereload');
require('laravel-elixir-karma');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
elixir(function(mix) {

var assets = [
        'public/js/vendor.js',
        'public/js/partials.js',
        'public/js/app.js',
        'public/css/vendor.css',
        'public/css/app.css'
    ],
    karmaJsDir = [
        'public/js/vendor.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/ng-describe/dist/ng-describe.js',
        'public/js/partials.js',
        'public/js/app.js',
        'tests/frontend/**/*.spec.js'
    ];

mix
    .bower()
    .frontend('./frontend/')
    .ngHtml2Js('./frontend/**/*.html')
    .rubySass('./frontend/**/*.sass', 'public/css')
    .version(assets)
    .livereload('public/build/rev-manifest.json', {
        liveCSS: true
    })
    .karma({
        jsDir: karmaJsDir
    });
});
