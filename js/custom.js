$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass('active');
      $('.navbar').toggleClass('active');
    });
});