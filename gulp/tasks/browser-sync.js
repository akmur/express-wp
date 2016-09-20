var env = require('../env.js');
var gulp = require('gulp');
var bs = require('browser-sync').create();

module.exports = function() {
  bs.init({
    proxy: "http://localhost:3000",
    port: 8080,
    open: false,
    notify: false,
    ghostMode: {
      clicks: false,
      location: false,
      forms: false,
      scroll: false
    }
  });

  bs.watch(env.folder.dist + "/styles/*.css").on("change", bs.reload);
  bs.watch(env.folder.dist + "/scripts/*.js").on('change', bs.reload);
  bs.watch("/views/**/*.jade").on('change', bs.reload);
};
