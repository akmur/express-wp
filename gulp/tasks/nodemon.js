var env = require('../env.js');
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


module.exports = function() {
  var started = false;

  return nodemon({
    script: './bin/www',
    ext: 'js jade'
  })
  .on('restart', function () {
     console.log('restarted!')
   })
  .on('start', function () {
    // to avoid nodemon being started multiple times
    if (!started) {
      cb();
      started = true;
    }
  });
};
