$(document).ready(function() {
  start();

  function start() {
    $('body')
      .css('background-color', '#F06292');
  }

  $('#upArrow')
    .on('mouseenter', function() {
      $(this).addClass('animated infinite rubberBand');
    })
    .on('mouseleave', function() {
      $(this).removeClass('animated infinite rubberBand');
    });
});
