$(document).ready(function() {
  var i = 1; //slides i counter
  var numberOfSlides = 5;
  var slidesDuration = 10; //seconds
  start();

  $('#circle1').on('click', function() {
    changeSlideAndCircle(1, true);
  });
  $('#circle2').on('click', function() {
    changeSlideAndCircle(2, true);
  });
  $('#circle3').on('click', function() {
    changeSlideAndCircle(3, true);
  });
  $('#circle4').on('click', function() {
    changeSlideAndCircle(4, true);
  });
  $('#circle5').on('click', function() {
    changeSlideAndCircle(5, true);
  });

  function start() {
    $('body')
      // .css('background-color', '#0071c1');
      .css('background-color', '#16a085');

    setInterval(function() {
      if (i == 6) {
        i = 1;
      }
      changeSlideAndCircle(i, false);
      i++;
    }, slidesDuration * 1000);
  }

  function changeSlideAndCircle(slideNumber, comesFromOnclick) {
    if (comesFromOnclick)
      i = slideNumber;
    hideAllSlides();
    setSlideVisible('slide' + slideNumber);
    changeCircle(slideNumber);
  }

  function hideAllSlides() {
    $('#slide1').hide();
    $('#slide2').hide();
    $('#slide3').hide();
    $('#slide4').hide();
    $('#slide5').hide();
  }

  function setSlideVisible(slideName) {
    $('#' + slideName).show();
  }

  function changeCircle(i) {
    $('#circle1').removeClass('currentCircle');
    $('#circle2').removeClass('currentCircle');
    $('#circle3').removeClass('currentCircle');
    $('#circle4').removeClass('currentCircle');
    $('#circle5').removeClass('currentCircle');
    $('#circle' + i).addClass('currentCircle');
  }

  $('#upArrow')
    .on('mouseenter', function() {
      $(this).addClass('animated infinite rubberBand');
    })
    .on('mouseleave', function() {
      $(this).removeClass('animated infinite rubberBand');
    });
});
