"use strict";

//active Links 

$("ul.menu li a").each(function () {
    if (this.href == window.location.href) {
        $(this).addClass("active");
    }
});

//Menu toggle
$('label').on('click', function (event) {
    // event.preventDefault();
    $('nav menu').toggleClass('away');
});

//span text menu

var tooltipSpan = document.getElementById('tooltip-span');

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = y + 20 + 'px';
    tooltipSpan.style.left = x + 20 + 'px';
};