/// <binding BeforeBuild='build' Clean='clean' />
"use strict";

var gulp = require('gulp'),
    ts = require("gulp-typescript"),
    tsProject = ts.createProject("tsconfig.json"),
    rimraf = require("rimraf"),
    concat = require('gulp-concat'),
    flatten = require('gulp-flatten');

var paths = {  
    wwwroot: "./wwwroot/",
    appRoot: "./app/",
    npmRoot: './node_modules/',
    scriptLibsFile : "libs.js",
    distFolder: "wwwroot/dist/"
};

paths.tsSrc = [paths.appRoot + "**/*.ts"];
paths.htmlSrc = [paths.appRoot + "**/*.html"];
paths.appJsRoot = paths.appRoot + 'js/';
paths.appCssRoot = paths.appRoot + "**/*.css";

paths.jsLibs = [
   paths.wwwroot + "lib/jquery/dist/jquery.min.js",
   paths.wwwroot + "lib/bootstrap/dist/js/bootstrap.min.js",
   paths.appJsRoot + 'app.js',
   paths.npmRoot + "zone.js/dist/zone.js",
   paths.npmRoot + "reflect-metadata/Reflect.js",
   paths.npmRoot + "systemjs/dist/system.src.js",
   "systemjs.config.js"
];

gulp.task("scripts-libs", ["scripts-libs-clean"], function () {
    return gulp.src(paths.jsLibs)
        .pipe(concat(paths.scriptLibsFile))
        .pipe(gulp.dest(paths.wwwroot));
});

gulp.task("scripts-libs-clean", function (cb) {
    return rimraf(paths.wwwRoot + paths.scriptLibsFile, cb);
});

gulp.task('scripts', ["scripts-clean"], function () {
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest(paths.distFolder));
});

gulp.task("scripts-clean", function (cb) {
    return rimraf(paths.distFolder, cb);
});

gulp.task('scripts:watch', function () {
    gulp.watch(paths.tsSrc, ['scripts']);
});

gulp.task('html:copy', function () {
    return gulp.src(paths.htmlSrc)
         .pipe(flatten())
         .pipe(gulp.dest(paths.wwwroot + 'html'));
});


gulp.task('html:watch', function () {
    gulp.watch(paths.htmlSrc, ['html:copy']);
});

gulp.task('css:copy', function () {
    return gulp.src(paths.appCssRoot)
         .pipe(gulp.dest(paths.wwwroot));
});

gulp.task('css:watch', function () {
    gulp.watch(paths.appCssRoot, ['css:copy']);
});

gulp.task("watch:all", ["scripts:watch", "html:watch", "css:watch"]);
gulp.task("build", ["scripts-libs", "scripts", "html:copy", "css:copy"]);
