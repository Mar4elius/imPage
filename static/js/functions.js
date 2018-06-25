
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