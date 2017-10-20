'use strict';

module.exports = function () {
  $.gulp.task('sprite:img', function() {

   var spriteData =
      $.gulp.src('./source/img/sprite/*.*')
      .pipe($.spriteSmith({
        imgName   : 'sprite.png',
        cssName   : 'sprite.css',
        imgPath   : '../img/sprite.png',
        cssFormat : 'css'
      }));
   var imgStream = spriteData.img
     .pipe($.gulp.dest($.config.root + '/assets/img'));

   var cssStream = spriteData.css
     .pipe($.gulp.dest($.config.root + '/assets/css'));

  return $.merge(imgStream, cssStream);
})
};
