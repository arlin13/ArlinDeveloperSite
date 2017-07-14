$(document).ready(function() {
  start();

  function start() {
    $('body')
      .css('background-color', '#3CC47C');
  }

  $('#upArrow')
    .on('mouseenter', function() {
      $(this).addClass('animated infinite rubberBand');
    })
    .on('mouseleave', function() {
      $(this).removeClass('animated infinite rubberBand');
    });
});
