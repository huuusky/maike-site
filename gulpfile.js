/**
 * Created by LiKun on 2016/8/8.
 */
"use strict";

var gulp = require('gulp');
var rename = require("gulp-rename");
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var sourceMaps = require('gulp-sourcemaps');

gulp.task('build:html', function () {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('build:css', function () {
  gulp.src('src/assets/stylesheets/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/assets/stylesheets'));
});

gulp.task('build', function () {
  gulp.start('build:html', 'build:css');
});

gulp.task('copy:jsLibs', function () {
  gulp.src('src/assets/scripts/*.min.js')
    .pipe(gulp.dest('dist/assets/scripts'));
});

gulp.task('copy:fonts', function () {
  gulp.src('src/assets/fonts/*.*')
    .pipe(gulp.dest('dist/assets/fonts'));
});

gulp.task('copy:images', function () {
  gulp.src('src/assets/images/**/*.*')
    .pipe(gulp.dest('dist/assets/images'));
});

gulp.task('copy', function () {
  gulp.start('copy:jsLibs', 'copy:fonts', 'copy:images');
});

gulp.task('default', function () {
  gulp.start('build', 'copy');
});
