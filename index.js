$(document).ready(function() {
  var i = 1; //slides i counter
  var numberOfSlides = 5;
  var slidesDuration = 7; //seconds

  start();

  // $('#myName')
  //   .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', startSideToSideEffect);
  $('.slide')
    .on('mouseenter', function() {
      $('#myName').css('font-weight', 'bold');
      $('#myName').addClass('pointer');
    })
    .on('mouseleave', function() {
      $('#myName').css('font-weight', 'normal');
      $('#myName').removeClass('pointer');
    });
    $('#circle1').on('click', function() { changeCircle(1); });
    $('#circle2').on('click', function() { changeCircle(2); });
    $('#circle3').on('click', function() { changeCircle(3); });
    $('#circle4').on('click', function() { changeCircle(4); });
    $('#circle5').on('click', function() { changeCircle(5); });

  function start() {
    $('body')
      .css('background-color', 'rgb(205, 195, 215)');

    startSideToSideEffect();
    setInterval(function() {
      if (i == 6) {
        i = 1;
      }
      changeSlide(i);
      i++;
    }, slidesDuration * 1000);
  }

  function startSideToSideEffect() {
    $('#text')
      .addClass('side-to-side');
  }

  function changeSlide(i) {
    hideAllSlides();
    setSlideVisible('slide' + i);
    changeCircle(i);
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

  $('.slide')
    .on('mouseenter', function() {
      // $('#flower1').css('transform', 'scale(1.1, 1.1)');
      // $('#flower1').css('transition', 'all 1s ease-in-out');
    })
    .on('mouseleave', function() {
      // $(this).removeClass('animated infinite rubberBand');
    });

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
