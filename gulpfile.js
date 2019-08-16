var gulp = require('gulp');
var prefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var jsonminify = require('gulp-jsonminify');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream')

gulp.task('copyHTML', function() {
  return gulp.src('public/*.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  return gulp.src('public/css/*.css')
  .pipe(prefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
  var general = gulp.src('public/js/*.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));

  var sw = gulp.src('public/sw.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('dist'));

  var manifest = gulp.src('public/manifest.json')
  .pipe(jsonminify())
  .pipe(gulp.dest('dist'));

  return merge(general, sw, manifest);
});

gulp.task('data', function() {
  return gulp.src('public/data/restaurants.json')
  .pipe(jsonminify())
  .pipe(gulp.dest('dist/data'));
});

gulp.task('images', function() {
  var imgs = gulp.src('public/img/*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5})
  ]))
  .pipe(gulp.dest('dist/img'));

  var icons = gulp.src('public/img/icons/*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5})
  ]))
  .pipe(gulp.dest('dist/img/icons'));

  return merge(imgs, icons);
});

gulp.task('default', gulp.series('copyHTML', 'styles', 'scripts', 'data', 'images'));