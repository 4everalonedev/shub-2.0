/**
 * Builder for the application
 */
var gulp = require ('gulp'),
    gulpif = require('gulp-if'),
    argv = require('yargs').argv,
    useref = require('gulp-useref'),
    rjs = require('gulp-requirejs'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),

    PROD = argv.prod,
    APP_DIST = 'dist/';

// Build index.html
gulp.task('index', function () {
    return gulp.src('src/index.html')
        .pipe(useref())
        .pipe(gulp.dest(APP_DIST));
});

// Register RSJ Optimizer task
gulp.task('require', function () {
    rjs({
        baseUrl: 'src/app',
        name: 'main',
        inlineText: false,
        useStrict: true,
        out: 'main.js',

        // Includes
        include: ['req', 'backbone'],

        paths: {
            req: __dirname + '/bower_components/requirejs/require',
            backbone: __dirname + '/bower_components/backbone/backbone',
            underscore: __dirname + '/bower_components/underscore/underscore',
            jquery: __dirname + '/bower_components/jquery/dist/jquery',

            SSO: 'empty:'
        }
    })
        .pipe(gulpif(PROD, uglify()))
        .pipe(gulp.dest(APP_DIST + '/app'));
});

gulp.task('serve', function () {
    connect.server({
        port: 80,
        livereload: true
    });
});

gulp.task('default', function () {
    console.log('DEFAULT TASK');
});
