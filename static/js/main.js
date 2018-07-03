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

  //Confetti effect
  $(".project").hover(
    //function for hover on
    function (evt) {
       //get all child elemnts of project div
      var bar = $(this).find("*");
      //get the value of the progress bar from data attribute
      var progress = bar[5].getAttribute('data-progress').slice(0, -1);
      //run confetti animation if progress 100%
      if (progress == 100) {
        $('.text').text('Completed!!!');
        $('.text').addClass('animated infinite tada');
        $(this).addClass("confettiBlock");
        


        for (var i = 0; i < 100; i++) {
          create(i);
        }
      }else{
        $('.text').text('In progress...');
        $('.text').addClass('animated jackInTheBox');
      }
    },
    //function for hover off
    function () {
      //that is not really correct but it works.
      //find all elements that has been created for confetti effect
      var confetti = document.querySelectorAll('#confettiID');

      for (var i = 0; i < confetti.length; i++) {
        confetti[i].remove();
      }
      $(this).removeClass('confettiBlock');
      $('.text').removeClass('animated jackInTheBox');
      $('.text').removeClass('animated infinite tada');
    });
  //\Confetti effect

//Progress bar effect
  $(window).scroll(function (evt) {

    evt.preventDefault();
    //get current position of the scroll
    var currentScrlPos = $(window).scrollTop();
    //show word HELLO when reach this point 
    if(currentScrlPos >= 400 && currentScrlPos <= 500){
      var helloWord = document.querySelector('#helloShow h3');
      showHello(helloWord);
    }
    //get the top position of mywork div
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

        setTimeout(function () { finalProgressBar(bar); }, 2000);
        flag = false;
      }
    }
  }); // window scroll //\Progress bar effect
  
  //google maps 
  google.maps.event.addDomListener(window, 'load', initMap);
 //\google maps 










});// \document