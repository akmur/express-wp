var env = require('../env.js');

var argv = require('yargs').argv;
var changed = require('gulp-changed');
var concat = require('gulp-concat');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

module.exports = function() {
  var sources = env.folder.src + '/scripts/*.js';

  // Via yargs we will set if we want minified code
  // Example: gulp --js=minify

  return gulp.src(sources)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(gulpif( (argv.js === 'minify'), uglify()))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(env.folder.dist + '/scripts/'));
};
