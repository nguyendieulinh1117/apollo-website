$(document).ready(function () {
  if (window.location.hash) {
    console.log(window.location.hash);
  $('html,body').animate({
      scrollTop: $(window.location.hash).offset().top 
   }, 1000);
}
})

