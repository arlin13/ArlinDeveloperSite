$(document).ready(function() {
  start();

  function start() {
    $('body')
      .css('background-color', '#f1c40f');
  }

  $('#upArrow')
    .on('mouseenter', function() {
      $(this).addClass('animated infinite rubberBand');
    })
    .on('mouseleave', function() {
      $(this).removeClass('animated infinite rubberBand');
    });
});
