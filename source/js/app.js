(function() {
  'use strict';
  // var rowLength = $('.product__row').length;
  // var rowNumber = $('.product__row:eq(0)').find('.product__card');
  // rowNumber.addClass('product__card_right');
  //
  // for(var i = 1; i<=rowLength; i++){
  //   if()
  // }
    $('a[data-rel^=lightcase]').lightcase();

    $('.modal__close-btn').on('click',function(e) {
        e.preventDefault();
        $('.modal__window').fadeOut('fast');
        $('.modal__window_quickorder').fadeOut('fast');
        $('.modal__window_product').fadeOut('fast');
    })
    $('.button_objects').on('click', function functionName() {
      $('.modal__window_quickorder').fadeIn('fast');
    })
    $('.button_disign').on('click', function functionName() {
      $('.modal__window_quickorder').fadeIn('fast');
    })
})();
