var gulp = require("gulp");
var $ = require('gulp-load-plugins')();
var autoprefixer = require("autoprefixer");
var browserSync = require("browser-sync").create();

// gulp.task('copyHTML', function(){
//     return gulp.src('./source/**/*.html')
//     .pipe(gulp.dest('./project/'))
// })

gulp.task('pug', function buildHTML() {
    return gulp.src('./source/html/*.pug')
    .pipe($.plumber())
    .pipe($.pug({
        pretty: true
    }))
    .pipe(gulp.dest("./project"))
    .pipe(browserSync.stream());
});

gulp.task('jp-pug', function buildHTML() {
    return gulp.src('./source/jp-html/*.pug')
    .pipe($.plumber())
    .pipe($.pug({
        pretty: true
    }))
    .pipe(gulp.dest("./project/jp/"))
    .pipe(browserSync.stream());
});

gulp.task('en-pug', function buildHTML() {
    return gulp.src('./source/en-html/*.pug')
    .pipe($.plumber())
    .pipe($.pug({
        pretty: true
    }))
    .pipe(gulp.dest("./project/en/"))
    .pipe(browserSync.stream());
});

gulp.task('inner-pug', function buildHTML() {
    return gulp.src('./source/html/product/*.pug')
    .pipe($.plumber())
    .pipe($.pug({
        pretty: true
    }))
    .pipe(gulp.dest("./project/product/"))
    .pipe(browserSync.stream());
});

gulp.task('jp-inner-pug', function buildHTML() {
    return gulp.src('./source/jp-html/product/*.pug')
    .pipe($.plumber())
    .pipe($.pug({
        pretty: true
    }))
    .pipe(gulp.dest("./project/jp/product/"))
    .pipe(browserSync.stream());
});

gulp.task('en-inner-pug', function buildHTML() {
    return gulp.src('./source/en-html/product/*.pug')
    .pipe($.plumber())
    .pipe($.pug({
        pretty: true
    }))
    .pipe(gulp.dest("./project/en/product/"))
    .pipe(browserSync.stream());
});

gulp.task('css-plugins', function () {
    return gulp
    .src("./source/styles/plugins/**/*")
    .pipe($.plumber())
    .pipe(gulp.dest("./project/styles/plugins/"))
    .pipe(browserSync.stream());
});

gulp.task('css-product', function () {
    return gulp
    .src("./source/styles/*.css")
    .pipe($.plumber())
    .pipe(gulp.dest("./project/styles/"))
    .pipe(browserSync.stream());
});

gulp.task('icon', function () {
    return gulp
    .src("./source/styles/fonts/**/*")
    .pipe($.plumber())
    .pipe(gulp.dest("./project/styles/fonts/"))
    .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp
    .src("./source/styles/images/**/*")
    .pipe($.plumber())
    .pipe(gulp.dest("./project/styles/images/"))
    .pipe(browserSync.stream());
});

gulp.task('json', function () {
    return gulp
    .src("./source/data/**/*")
    .pipe($.plumber())
    .pipe(gulp.dest("./project/data/"))
    .pipe(browserSync.stream());
});

gulp.task('sass', function () {
    var plugins = [                         
        autoprefixer({ browsers: ['last 2 version'] }) //postcss 使用的套件
    ];;

    return gulp.src('./source/styles/**/*.sass')
    .pipe($.plumber())
    .pipe($.sass().on('error', $.sass.logError))
    // 編譯完成
    .pipe($.postcss(plugins))
    .pipe(gulp.dest('./project/styles/'))
    .pipe(browserSync.stream());
});


gulp.task('js', function(){
    return gulp.src('./source/scripts/**/*.js')
    .pipe($.plumber())
    .pipe(gulp.dest('./project/scripts/'))
    .pipe(browserSync.stream());
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./project",
            index: "./index.html"
        },
        reloadDebounce: 1000 //調整參數減少重新整理次數
    });
});

gulp.task('watch', function () {
    gulp.watch('./source/html/**/*.pug', ['pug']);
    gulp.watch('./source/jp-html/*.pug', ['jp-pug']);
    gulp.watch('./source/en-html/*.pug', ['en-pug']);
    gulp.watch('./source/html/product/*.pug', ['inner-pug']);
    gulp.watch('./source/jp-html/product/*.pug', ['jp-inner-pug']);
    gulp.watch('./source/en-html/product/*.pug', ['en-inner-pug']);
    gulp.watch('./source/styles/plugins/**/*', ['css-plugins']);
    gulp.watch('./source/styles/*.css', ['css-product']);
    gulp.watch('./source/styles/font/**/*', ['icon']);
    gulp.watch('./source/styles/images/**/*', ['images']);
    gulp.watch('./source/data/**/*', ['json']);
    gulp.watch('./source/styles/**/*.sass', ['sass']);
    gulp.watch('./source/scripts/**/*.js', ['js']);
});

gulp.task('default', ['pug', 'jp-pug', 'en-pug' , 'inner-pug', 'jp-inner-pug', 'en-inner-pug', 'images', 'json', 'icon', 'css-plugins','css-product', 'sass', 'js', 'browser-sync', 'watch']);