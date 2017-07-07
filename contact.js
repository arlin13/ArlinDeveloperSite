$(document).ready(function() {
  start();

  function start() {
    $('#lightBlueDiv')
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hideBlue);

    $('.emphazis')
      .on('mouseenter', function() {
        $(this).css('color', 'white');
        $(this).css('font-size', '9em');
      })
      .on('mouseleave', function() {
        $(this).css('color', 'black');
        $(this).css('font-size', '7em');
      });
  }

  function hideBlue() {
    $('#lightBlueDiv').hide();
  }

  $('#leftArrow')
    .on('mouseenter', function() {
      $(this).addClass('animated infinite rubberBand');
    })
    .on('mouseleave', function() {
      $(this).removeClass('animated infinite rubberBand');
    })
    .on('click', function() {
      $(this).addClass('animated bounceOutLeft');
    });

  $('#rightArrow')
    .on('mouseenter', function() {
      $(this).addClass('animated infinite rubberBand');
    })
    .on('mouseleave', function() {
      $(this).removeClass('animated infinite rubberBand');
    });

});
