$(document).ready(function() {

  $('#leftArrow')
    .on('mouseenter', function() {
      $(this).addClass('animated infinite bounce');
    })
    .on('mouseleave', function() {
      $(this).removeClass('animated infinite bounce');
    })
    .on('click', function() {
      $('#greeting').addClass('hidden');
      $('#portfolio').removeClass('hidden');
    });
  $('#rightArrow')
    .on('mouseenter', function() {
      $(this).addClass('animated infinite bounce');
    })
    .on('mouseleave', function() {
      $(this).removeClass('animated infinite bounce');
    });

  $('#cuteEffect')
    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);

  function doSomething() {
    $('#cuteEffect').hide();
    $('#t')
      .on('mouseenter', function() {
        $(this).css('color', 'hotpink');
        $(this).css('font-size', '4.5em');
      })
      .on('mouseleave', function() {
        $(this).css('color', 'white');
        $(this).css('font-size', '3em');
      });
  }
});



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
