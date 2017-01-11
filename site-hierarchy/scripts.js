$(document).ready(function (){
  
  $(window).click(function () {
    $('nav>ul>li').removeClass('active');
  });
  
  $('nav>ul>li').click(function(event) {
    event.stopPropagation();
    $('nav>ul>li').not(this).removeClass('active');
    $(this).toggleClass('active');
  });
  
});