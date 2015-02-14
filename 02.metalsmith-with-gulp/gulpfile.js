var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var cp = require('child_process');

gulp.task('metalsmith', function () {
  cp.spawn('node', ['node_modules/.bin/metalsmith'])
    .on('close', reload);
});

gulp.task('serve', function () {
  browserSync({
    notify: false,
    server: {
      baseDir: "html"
    }
  });

  gulp.watch('_source/**/*.html', ['metalsmith']);
});