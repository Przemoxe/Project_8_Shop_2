//na server np. theme w cp-content
var gulp = require('gulp');
var sass = require('gulp-sass');
var compiler = require('sass');
sass.compiler = compiler;
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();

'use strict';

function style(){
  return gulp.src('./sass/**/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
}


function watch(){
  browserSync.init({
    proxy: "woocommerce-template.test",

  });


  gulp.watch('./sass/**/*.sass', style);
  gulp.watch('./sass/**/*.scss', style);
  gulp.watch('./*.php').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;



