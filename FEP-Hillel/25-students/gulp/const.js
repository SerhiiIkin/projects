module.exports = {
    dist: "./dist",
    html: "src/*.html",
    css: "src/*.css",
    js: "src/**/*.js",
    jsSrc: ["./src/js/**/*.js", "!./src/js/index.js", "./src/js/index.js"],
    addJsCss: `<link rel="stylesheet" href="./style.css" />\n\t\t<script defer src="./jquery.min.js"></script>\n\t\t<script defer src="./app.js"></script>\n\t\t`,
    nameFiles: {
        js: "app.js",
    },
};
