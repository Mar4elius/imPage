$(document).ready(function (e) {

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

        
        var flag = true;

        //console.log(currentScrlPos);


        if (currentScrlPos >= scrollOffset) {
            var bar = document.getElementsByClassName('progress-bar');
            var width = 1;

            bar = fillProgressBar(bar, width);

            setTimeout(function () { emptyProgressBar(bar, width); }, 1500);

            setTimeout(function () { finalProgressBar(bar); }, 3000);
            $(window).off('scroll');
        }
        
    }); // window scroll
});// \document