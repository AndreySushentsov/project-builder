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

    var owl = $('.owl-carousel');
    owl.owlCarousel({
      loop:true,
      autoplay:true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        998:{
          items:3
        }
      }
    });

    $('#control_l').on('click', function(e){
      e.preventDefault();
      owl.trigger('prev.owl.carousel');
    });
    $('#control_r').on('click', function(e){
      e.preventDefault();
      owl.trigger('next.owl.carousel');
    });

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
    $('.main-baner__button_slider').on('click',function () {
      $('.modal__window').fadeIn('fast');
    })
    $('.object__title a').on('click',function (e) {
      e.preventDefault();
      $('.modal__window_product').fadeIn('fast');
    })
})();
