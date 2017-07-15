$(document).ready(function() {
  start();

  function start() {
    $('body')
    // .css('background-color', '#0071c1');
      .css('background-color', '#16a085');
  }

  $('#upArrow')
    .on('mouseenter', function() {
      $(this).addClass('animated infinite rubberBand');
    })
    .on('mouseleave', function() {
      $(this).removeClass('animated infinite rubberBand');
    });
});
