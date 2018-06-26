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
    google.maps.event.addDomListener(window,'load', initMap);
});// \document