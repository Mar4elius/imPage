function showHello(helloWord){
    $(helloWord).css("visibility","visible");
    $(helloWord).addClass('animated bounceInLeft');
}

// progress bars
function fillProgressBar(bar, width) {
    for (var i = 0; i < bar.length; i++) {
        while (width != 100) {
            width++;
            bar[i].style.width = width + '%';
        }
        width = 0;
    }
    return bar;
}

function emptyProgressBar(bar, width) {
    for (var j = 0; j < bar.length; j++) {
        var bar100 = bar[j].style.width;
        bar100 = bar100.slice(0, -1);
        while (bar100 != 0) {
            bar100--;
            bar[j].style.width = width + '%';
        }
    }
    return bar;
}

function finalProgressBar(bar) {
    for (var k = 0; k < bar.length; k++) {
        var finallBar = bar[k].getAttribute('data-progress');
        bar[k].style.width = finallBar;
    }
}
// \progress bars
//  validation for input form
$(function () {
    
    $.validator.setDefaults({
        
        highlight: function(element){
           // $(element).closest('.form-group').addClass('text-warning');
            $('.error').addClass('text-danger');
        },
        unhighlight: function(element){
            $('#.error').removeClass('text-danger');
        }
    });

    $("form").validate({
        rules: {
            name: {
                required: true,
                lettersonly: true,
                name: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                message: true,
                minlength: 25
            }
        },
        messages: {
            name: {
                required: 'Please enter your name.',
                minlength: 'Name must have at least <em>2</em> characters.',
                lettersonly: 'Name <em>can not</em> contain numbers.'
            },
            email: {
                required: 'Please enter your email address.',
                email: 'Please enter a <em>valid</em> email address.'
            },
            message: {
                required: 'Please enter your message.',
                minlength: 'Message must have at least 25 characters.'
            }
        }
    });
});

//google maps
function initMap(){
    //edmonton downtown location
    var edmonton = {lat: 53.540748, lng:-113.499914};
    var mapOptions = {
        zoom: 10, 
        center: edmonton, 
        streetViewControl:false,
        overviewMapControl:false,
        mapTypeControlOptions:{ style: google.maps.MapTypeControlStyle.DROPDOWN_MENU //DEFAULT and DROPDOWN_MENU
        },
        zoomControl:true,
        fullscreenControl:false

    };//end options

    var customStyle =
    [
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 65
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": "50"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "30"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "40"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#ffff00"
                },
                {
                    "lightness": -25
                },
                {
                    "saturation": -97
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "lightness": -25
                },
                {
                    "saturation": -100
                }
            ]
        }
    ];
    
    //map
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //marker position
    var marker = new google.maps.Marker({position: edmonton, map: map});

    map.setOptions({styles: customStyle});

   
}
 //confetti functions
    //https://codepen.io/anon/pen/JMOQzE
function create(i) {
    var width = Math.random() * 8;
    var height = width * 0.5;
    var colourIdx = Math.ceil(Math.random() * 3);
    var colour = "red";
    switch(colourIdx) {
      case 1:
        colour = "yellow";
        break;
      case 2:
        colour = "blue";
        break;
      default:
        colour = "red";
    }
    $('<div id="confettiID" class="confetti-'+i+' '+colour+'"></div>').css({
      "width" : width+"px",
      "height" : height+"px",
      "top" : -Math.random()*20+"%",
      "left" : Math.random()*100+"%",
      "opacity" : Math.random()+0.5,
      "transform" : "rotate("+Math.random()*360+"deg)"
    }).appendTo('.confettiBlock');  
    
    drop(i);
  }
  
  function drop(x) {
    $('.confetti-'+x).animate({
      top: "100%",
    //   left: "+="+Math.random()*120+"%"
    }, Math.random()*3000 + 5000, function() {
      reset(x);
    });
  }
  
  function reset(x) {
    $('.confetti-'+x).animate({
      "top" : -Math.random()*20+"%",
     //"left" : "-="+Math.random()*15+"%"
    }, 0, function() {
      drop(x);             
    });
  }
  //\confetti functions