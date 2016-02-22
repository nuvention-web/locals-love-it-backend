/*Gulpfile for meerkat/LocalsLoveIt*/
'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    bower = require('gulp-bower'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    flatten = require('gulp-flatten'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    reactify = require('reactify'),
    del = require('del'),
    delJs = require('del'),
    delFont = require('del'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    csso = require('gulp-csso'),
    argv = require('yargs').argv,
    gulpFilter = require('gulp-filter'),
    mainBowerFiles = require('main-bower-files'),
    changed = require('gulp-changed'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    reload = browserSync.reload,
    p = {
      jsx: './src/main.jsx',
      scripts: 'src/',
      htmlSource: 'public/html/*',
      bundle: 'app.js',
      cssSource: 'public/css/*',
      bootCss: 'bootstrap/css/*',
      bootJs: 'bootstrap/js/*',
      fonts: 'public/fonts/*',
      dist: 'dist/',
      distJS: 'dist/js',
      distFONT: 'dist/fonts',
      distCSS: 'dist/css',
      distHTML: 'dist/html',
    };

gulp.task('clean_FONTS_folder', function (cb) {
  delFont([p.distFONT], cb);
}
    );

gulp.task('clean_JS_folder', function (cb) {
  delJs([p.distJS], cb);
}
    );
gulp.task('place_FONTS_in_dist', function (cb) {
  return gulp.src(p.fonts)
    .pipe(gulp.dest(p.distFONT));
}
  );
gulp.task('place_STYLES_in_dist', function () {
  return gulp.src(p.cssSource)
    .pipe(changed(p.distCSS))
    .on('error', notify.onError())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest(p.distCSS))
    .pipe(reload({ stream: true }));
}
);

gulp.task('place_HTML_in_dist', function () {
  return gulp.src(p.htmlSource)
    .pipe(gulp.dest(p.dist));
}
);

gulp.task('browserSync', function () {
  browserSync({
    notify: true,
    server: {
      baseDir: 'dist/',
    },
  });
}
    );

gulp.task('rebundle_on_jsx_change', function () {
  var bundler = watchify(browserify(p.jsx, watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(p.bundle))
      .pipe(gulp.dest(p.distJS))
      .pipe(reload({ stream: true }));
  }

  bundler.transform('reactify', {stripTypes: true, es6: true})
  .on('update', rebundle);
  return rebundle();
}
  );

gulp.task('browserify_JSXfile', function () {
  browserify(p.jsx)
    .transform('reactify', {stripTypes: true, es6: true})
    .bundle()
    .pipe(source(p.bundle))
    .pipe(buffer())
  /*  .pipe(uglify())*/
    .pipe(gulp.dest(p.distJS));
}
    );

gulp.task('modernizr_browser_tests', function () {
  return gulp.src('bower_components/modernizr/modernizr.js')
    .pipe(gulp.dest(p.distJS));
}
    );

gulp.task('auxillary_files', function () {
  gulp.start(['modernizr_browser_tests']);}
);

gulp.task('watch_for_file_change', function () {
  gulp.watch(p.cssSource, ['place_STYLES_in_dist', 'uglify', 'reload']);
  gulp.watch(p.htmlSource, ['place_HTML_in_dist', 'uglify', 'reload']);
}
    );

gulp.task('watch_in_browser', function () {
  gulp.start(['browserSync', 'watch_for_file_change', 'rebundle_on_jsx_change']);}
);

gulp.task('build_for_browser', ['clean_FONTS_folder', 'clean_JS_folder'], function () {
  gulp.start(['auxillary_files', 'browserify_JSXfile']);
  gulp.start(['place_STYLES_in_dist', 'place_HTML_in_dist', 'place_FONTS_in_dist']);
}
  );

gulp.task('default', function () {
  console.log('Deploy LLI locally with gulp build or gulp watch');
}
    );
