const gulp = require('gulp');
const copy = require('gulp-copy');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

function copySource () {
  return gulp
    .src([
      'src/*.js'
    ])
    .pipe(copy('dist', {
      prefix: 1
    }))
  ;
};

function compress () {
  return gulp.src('src/*.js')
    .pipe(uglify({
      output: {
        comments: '/^!/'
      }
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
  ;
};

gulp.task('copy-source', copySource);
gulp.task('compress', compress);
gulp.task('default', gulp.parallel(copySource, compress));
