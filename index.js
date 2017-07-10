$(document).ready(function() {
  start();

  function start() {
    $('#pinkDiv')
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hidePink);
    $('#lightBlueDiv')
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', hideBlue);
    startTextEffect();
    $('#myName')
      .on('mouseenter', function() {
        $(this).css('color', 'hotpink');
        // $(this).css('font-size', '9em');
      })
      .on('mouseleave', function() {
        $(this).css('color', 'white');
        // $(this).css('font-size', '7em');
      });
  }

  function hidePink() {
    $('#pinkDiv').hide();
  }
  function hideBlue() {
    $('#lightBlueDiv').hide();
  }

  function startTextEffect() {
    $('#text1').hide().delay(5500);
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
