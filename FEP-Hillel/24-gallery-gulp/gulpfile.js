const { src, dest, watch, parallel, series } = require("gulp"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    clean = require("gulp-clean"),
    browserSync = require("browser-sync"),
    cleanCSS = require("gulp-clean-css"),
    inject = require("gulp-inject-string"),
    autoprefixer = require("gulp-autoprefixer");
const jqueryMin = "node_modules/jquery/dist/jquery.min.js";

function browser() {
    browserSync({
        server: {
            baseDir: "./dist",
        },
        notify: false,
    });
}

function getJquery() {
    return src(jqueryMin)
        .pipe(dest("./dist"))
        .pipe(browserSync.reload({ stream: true }));
}

function makeJs() {
    return src(["./src/js/**/*.js", "!./src/js/index.js", "./src/js/index.js"])
        .pipe(concat("app.js"))
        .pipe(uglify())
        .pipe(dest("./dist"))
        .pipe(browserSync.reload({ stream: true }));
}

function makeHtml() {
    return src("src/*.html")
        .pipe(
            inject.before(
                "<title",
                `<link rel="stylesheet" href="./style.css" />\n\t\t<script defer src="./jquery.min.js"></script>\n\t\t<script defer src="./app.js"></script>\n\t\t`
            )
        )
        .pipe(dest("./dist"))
        .pipe(browserSync.reload({ stream: true }));
}

function makeCss() {
    return src("src/*.css")
        .pipe(cleanCSS())
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(dest("./dist"))
        .pipe(browserSync.reload({ stream: true }));
}

function clear() {
    return src("./dist/*.*", { read: false }).pipe(clean());
}

function watchFiles() {
    return (
        watch("src/**/*.js", parallel(makeJs)),
        watch("src/*.css", parallel(makeCss)),
        watch("src/*.html", parallel(makeHtml))
    );
}

module.exports = {
    build: series(clear, parallel(makeJs, makeHtml, makeCss)),
    dev: series(
        clear,
        parallel(makeJs, makeHtml, makeCss, getJquery, browser, watchFiles)
    ),
};
