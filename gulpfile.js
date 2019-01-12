var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var messages    = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Compile files from _scss into both _site/css (for live injecting)
 * and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_scss/*.scss')
        .pipe(sass({
          outputStyle: 'compressed', // Use 'expanded' for debug.
          // sourceComments: 'map',
          includePaths: ['scss'],
          onError: browserSync.notify('Error in sass')
        }))
        .on('error', sass.logError)
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( 'jekyll' , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Wait launch the Server
 */
gulp.task('browser-sync', function(done) {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
    done();
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('browser-reload',function (done) {
    browserSync.reload();
    done();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('build', gulp.series('sass', 'jekyll-build'));

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['_scss/*.scss', '_scss/*/*.scss'], gulp.series('sass', 'browser-reload'));
    gulp.watch(['*.html', '_includes/*.html', '_includes/*/*.html',
      '_layouts/*.html', '_pages/*', '_posts/*', 'js/*.js', 'images/*/*',
      '_config.yml', '_tag/*'], gulp.series('jekyll-build', 'browser-reload'));
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.series('build', gulp.parallel('browser-sync', 'watch')));
