// *****************************************************************
// USEFUL TASKS
// $ gulp compile -> Compile the development files
// $ gulp -> Compile and start a local webserver + watcher
// $ gulp serve -> Just serve the local webserver
//
// NOTE: to get minified js and css run as gulp --js=minify --css=compressed
// *****************************************************************


var env = require('./gulp/env.js');
var gulp = require('gulp');

// BASE SINGLE TASKS
gulp.task('clean', env.loadTask('clean'));
gulp.task('copy', env.loadTask('copy-assets'));
gulp.task('nodemon', env.loadTask('nodemon'));
gulp.task('script', env.loadTask('scripts'));
gulp.task('srcWatch', env.loadTask('src-watch'));
gulp.task('style', env.loadTask('sass'));

// USEFUL TASKS
gulp.task('compile', ['style', 'script']);
gulp.task('default', ['compile', 'copy', 'nodemon', 'srcWatch'], env.loadTask('browser-sync'));
gulp.task('serve', ['nodemon', 'srcWatch'], env.loadTask('browser-sync'));
