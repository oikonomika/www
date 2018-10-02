const gulp = require('gulp')
const scss = require('gulp-sass')
const pug = require('gulp-pug')
const browserSync = require('browser-sync')
const reload = browserSync.reload

const path = {
    build: {
        pug: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        favicon: 'dist/'
    },
    src: {
        pug: 'src/*.pug',
        js: 'src/js/main.js',
        style: 'src/style/main.sass',
        img: 'src/img/**/*.*',
        favicon: 'src/favicon.ico'
    },
    watch: {
        pug: 'src/**/*.pug',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.sass',
        img: 'src/img/**/*.*',
    },
    clean: './dist'
}

gulp.task('pug:build', () => {
  gulp.src(path.src.pug)
  .pipe(pug())
  .pipe(gulp.dest(path.build.pug))
  .pipe(reload({stream: true}))
})

gulp.task('style:build', () => {
  gulp.src(path.src.style)
  .pipe(scss().on('error', scss.logError))
  .pipe(gulp.dest(path.build.css))
  .pipe(reload({stream: true}))
})

gulp.task('js:build', () => {
  gulp.src(path.src.js)
  .pipe(gulp.dest(path.build.js))
  .pipe(reload({stream: true}))
})

gulp.task('image:build', () => {
  gulp.src(path.src.img)
  .pipe(gulp.dest(path.build.img))
  .pipe(reload({stream: true}))
})

gulp.task('favicon:build', () => {
  gulp.src(path.src.favicon)
  .pipe(gulp.dest(path.build.favicon))
  .pipe(reload({stream: true}))
})

gulp.task('watch', () => {
  gulp.watch(path.watch.pug, ['pug:build'])
  gulp.watch(path.watch.style, ['style:build'])
  gulp.watch(path.watch.js, ['js:build'])
  gulp.watch(path.watch.img, ['image:build'])
})

gulp.task('default', ['pug:build', 'style:build', 'js:build', 'image:build', 'favicon:build'])
