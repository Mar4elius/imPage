// animation for icons
$("i").hover(
    function () {
        $(this).addClass('animated swing');
    },
    function (){
        $(this).removeClass("animated swing");
    }
);