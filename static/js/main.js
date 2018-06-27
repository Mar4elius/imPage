$(document).ready(function (e) {
  var flag = true; // need this flag to run bar animation;
  // animation for icons
  $("i").hover(
    function () {
      $(this).addClass('animated swing');
    },
    function () {
      $(this).removeClass("animated swing");
    });




  $(".project").hover(

    function (evt) {
      //var bar = $(this).siblings();
      var bar = $(this).find("*");
      var progress = bar[3].getAttribute('data-progress').slice(0,-1);

       if (progress == 100) {

        $(this).addClass("confettiBlock");

        for (var i = 0; i < 170; i++) {
          create(i);
        }
      }
    },
    function () {
      var confetti = document.querySelectorAll('#confettiID');

      for (var i = 0; i < confetti.length; i++) {
        confetti[i].remove();
      }
      $(this).removeClass('confettiBlock');
    });


  $(window).scroll(function (evt) {

    evt.preventDefault();
    //get current position of the scroll
    var currentScrlPos = $(window).scrollTop();
    //get the top position of div
    var scrollOffset = $('#mywork').offset().top;
    //if user reaches the top of the page reset flag 
    if (currentScrlPos >= 0 && currentScrlPos <= 50) {
      flag = true;
    }
    //console.log(currentScrlPos);
    if (flag) {
      if (currentScrlPos >= scrollOffset) {
        var bar = document.getElementsByClassName('progress-bar');
        var width = 1;

        bar = fillProgressBar(bar, width);

        setTimeout(function () { emptyProgressBar(bar, width); }, 1000);

        setTimeout(function () { finalProgressBar(bar); }, 2500);
        flag = false;
      }
    }

  }); // window scroll
  //google maps 
  google.maps.event.addDomListener(window, 'load', initMap);










});// \document