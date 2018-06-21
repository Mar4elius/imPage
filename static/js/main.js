$(document).ready(function () {

    // animation for icons
    $("i").hover(
        function () {
            $(this).addClass('animated swing');
        },
        function () {
            $(this).removeClass("animated swing");
        });


    $(window).on('scroll', function (evt) {
        //get current position of the scroll
        var currentScrlPos = $(window).scrollTop();
        //get the top position of div
        var scrollOffset = $('#mywork').offset().top;

        if (currentScrlPos >= scrollOffset) {
            var bar = document.getElementsByClassName('progress-bar');
            var width = 1;
            for (var i = 0; i < bar.length; i++) {
                while (width != 100) {
                    width++;
                    bar[i].style.width = width + '%';
                }
                width = 0;
            }
        
            setTimeout(function(){
                for (var j = 0; j < bar.length; j++) {
                    var bar100 = bar[j].style.width;
                    bar100 = bar100.slice(0,-1);
                    while (bar100 != 0) {
                        bar100--;
                        bar[j].style.width = width + '%';
                    }                
                }
            },1000);

            setTimeout(function(t){

            for (var k = 0; k < bar.length; k++) {
                var finallBar = bar[k].getAttribute('data-progress');
                bar[k].style.width = finallBar;
            }
        },2000);            
      
    }
    });


});