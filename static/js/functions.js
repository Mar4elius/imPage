
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