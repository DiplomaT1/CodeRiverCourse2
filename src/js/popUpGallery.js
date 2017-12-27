$(function popUpGallery() {
  $('.js-minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div class="overlay"></div><div class="maximized"><img src="'+i_path+'"><div class="close-popup"><i></i></div></div>');
    $('.maximized').css({
      left: ($(document).width() - $('.maximized').outerWidth())/2,
      top: ($(window).height() - $('.maximized').outerHeight())/2
    });
    $('.overlay, .maximized').fadeIn('fast');
  });
  
  $('body').on('click', '.close-popup, .overlay', function(event) {
    event.preventDefault();
    
    $('.overlay, .maximized').fadeOut('fast', function() {
      $('.close-popup, .maximized, .overlay').remove();
    });
  });
});

