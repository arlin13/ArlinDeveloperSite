$(document).ready(function() {
  start();

  $('#myName')
    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', startSideToSideEffect)
    .on('mouseenter', function() {
      $(this).css('font-weight', 'bold');
      $(this).addClass('pointer');
    })
    .on('mouseleave', function() {
      $(this).css('font-weight', 'normal');
      $(this).removeClass('pointer');
    });

    function startSideToSideEffect() {
      $('#text')
        .addClass('side-to-side');
    }

  function start() {
    $('#container')
      .css('background-color', 'rgb(205, 195, 215)');
  }

  $('.slide')
    .on('mouseenter', function() {
      // $('#flower1').css('transform', 'scale(1.1, 1.1)');
      // $('#flower1').css('transition', 'all 1s ease-in-out');
    })
    .on('mouseleave', function(){
      $(this).removeClass('animated infinite rubberBand');
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


// var slides = ['greeting', 'about', 'portfolio'];
// var currentIndex = 0;

// function startSlideShow() {
//   setInterval(function(){
//     if (currentIndex == slides.length)
//       currentIndex = 0;
//     changeSlide(currentIndex);
//     currentIndex++;
//   }, 6500);
// }

// function changeSlide(index){
//   var currentSlide = slides[index];
//   var currentDiv = $('#' + currentSlide);
// }

// setGreeting();
// function setGreeting() {
//   var now = new Date();
//   var hour = now.getHours();
//   if (hour >= 1 && hour <= 11) {
//     $('#greeting').text("Good morning");
//   } else if (hour >= 12 && hour <= 16){
//     $('#greeting').innerHTML = "Good afternoon";
//   } else if (hour >= 17 && hour <= 19){
//     $('#greeting').innerHTML = "Good evening";
//   } else if (hour >= 20 && hour <= 24){
//     $('#greeting').innerHTML = "Good night";
//   }
//   else{
//     $('#greeting').innerHTML = "Hassi";
//   }
// }
