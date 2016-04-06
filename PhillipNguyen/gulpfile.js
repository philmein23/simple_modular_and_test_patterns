const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['index.js', 'lib/**/*.js', 'test/**/*.js', 'gulpfile.js'];


gulp.task('lint: test', () => {
  return gulp.src(files)
      .pipe(eslint({
        rules: {
          'indent': ['error', 2]
        },
        envs: [
          'mocha', 'es6'
        ]
      }))
      .pipe(eslint.format());
});


gulp.task('mocha: test', () => {
  return gulp.src(files)
      .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch(files, ['lint: test', 'mocha: test']);
});

gulp.task('default', ['watch']);
