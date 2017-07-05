$(document).ready(function() {



  $('#t').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);

  function doSomething() {
    console.log('terminado');
    $('#t')
      .on('mouseenter', function() {
        $(this).css('color', 'hotpink');
      })
      .on('mouseleave', function() {
        $(this).css('color', 'white');
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
