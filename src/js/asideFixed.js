$(function asideFixed() {
  var sidebar = $('.aside-bar');
  var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

  $(window).scroll(function(event) {
    var y = $(this).scrollTop();
    if (y >= top) {
      sidebar.addClass('aside-fixed');
    } else {
      sidebar.removeClass('aside-fixed');
    }
  });
});

