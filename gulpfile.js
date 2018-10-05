const gulp = require('gulp')
const scss = require('gulp-sass')
const pug = require('gulp-pug')
const browserSync = require('browser-sync')
const reload = browserSync.reload

const path = {
    build: {
        pug: 'dist/',
        css: 'dist/css/',
        script: 'dist/scripts/',
        img: 'dist/img/',
        favicon: 'dist/',
        robots: 'dist/'
    },
    src: {
        pug: 'src/*.pug',
        style: 'src/styles/*.sass',
        script: 'src/scripts/**/*.js',
        img: 'src/img/**/*.*',
        favicon: 'src/favicon.ico',
        robots: 'src/robots.txt'
    },
    watch: {
        pug: 'src/**/*.pug',
        script: 'src/scripts/**/*.js',
        style: 'src/styles/**/*.sass',
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

gulp.task('script:build', () => {
  gulp.src(path.src.script)
  .pipe(gulp.dest(path.build.script))
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

gulp.task('robots:build', () => {
  gulp.src(path.src.robots)
  .pipe(gulp.dest(path.build.robots))
  .pipe(reload({stream: true}))
})

gulp.task('watch', () => {
  gulp.watch(path.watch.pug, ['pug:build'])
  gulp.watch(path.watch.style, ['style:build'])
  gulp.watch(path.watch.script, ['script:build'])
  gulp.watch(path.watch.img, ['image:build'])
})

gulp.task('default', ['pug:build', 'style:build', 'script:build', 'image:build', 'favicon:build', 'robots:build'])
