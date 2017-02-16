//when page loads begin fadein of images in .fadein class
$('body').on('onload', function () {
  $('.fadein' 'li').fadeIn(normal);
//cycle thru .fadein class <li> img elements
  imagesToFadeIn = document.('.fadein', 'li');

  for (var i = 0; i < imagesToFadeIn.length; i++) {

  	$('.fadein').fadeIn(normal);
  }
});





//$(function(){
//    $('.fadein img:gt(0)').hide();
//    setInterval(function(){
//      $('.fadein :first-child').fadeOut()
//         .next('img').fadeIn()
//         .end().appendTo('.fadein');}, 
//      3000);
//});
