const { src, dest, watch, parallel, series } = require("gulp"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    clean = require("gulp-clean"),
    browserSync = require("browser-sync"),
    cleanCSS = require("gulp-clean-css"),
    inject = require("gulp-inject-string"),
    autoprefixer = require("gulp-autoprefixer"),
    sourcemaps = require("gulp-sourcemaps");
const jqueryMin = "node_modules/jquery/dist/jquery.min.js";
const config = require("./gulp/const.js");

function browser() {
    browserSync({
        server: {
            baseDir: config.dist,
        },
        notify: false,
    });
}

function getJquery() {
    return src(jqueryMin).pipe(dest(config.dist));
}

function makeJs() {
    return src(config.jsSrc)
        .pipe(sourcemaps.init())
        .pipe(concat(config.nameFiles.js))
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(dest(config.dist))
        .pipe(browserSync.reload({ stream: true }));
}

function makeHtml() {
    return src(config.html)
        .pipe(inject.before("<title", config.addJsCss))
        .pipe(dest(config.dist))
        .pipe(browserSync.reload({ stream: true }));
}

function makeCss() {
    return src(config.css)
        .pipe(cleanCSS())
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(dest(config.dist))
        .pipe(browserSync.reload({ stream: true }));
}

function clear() {
    return src(`${config.dist}/*.*`, { read: false, allowEmpty: true }).pipe(
        clean()
    );
}

function watchFiles() {
    return (
        watch(config.js, parallel(makeJs)),
        watch(config.css, parallel(makeCss)),
        watch(config.html, parallel(makeHtml))
    );
}

module.exports = {
    build: series(clear, parallel(makeJs, makeHtml, makeCss)),
    dev: series(
        clear,
        parallel(makeJs, makeHtml, makeCss, getJquery, browser, watchFiles)
    ),
};
