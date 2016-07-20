$(document).ready(function () {
    $('#full').fullpage({
        menu: '#menu',
        // anchors: ['Page1', 'Page2', 'Page3', 'Page4', 'Page5', 'Page6', 'Page7'],
        navigation: true,
        navigationTooltips: ['Page1', 'Page2', 'Page3', 'Page4', 'Page5', 'Page6', 'Page7'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        scrollBar: false,
        easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
        easingcss3: 'cubic-bezier(0.86, 0, 0.07, 1)',
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        sectionsColor: ['#60e4cc', '#609be4', '#7749e6', '#a7377f', '#e0a77e', '#609be4', '#7749e6'],
        onLeave: function (index, nextIndex, direction) {
            console.log("leave" + index + '-' + nextIndex + '-' + direction);
            if (nextIndex === 1 || nextIndex === 7) {
                $('#menu').hide();
                $('#fp-nav').hide(700);
            } else {
                $('#fp-nav').show(700);
            }
        },
        afterLoad: function (anchorLink, index) {
            console.log("load" + '-' + anchorLink + '-' + index);
            if (index !== 1 && index !== 7) {
                $('#menu').show();
            }
        },
        afterRender: function () {
            console.log("afterRender");
            autoScrolling();
        },
        afterResize: function () {
            autoScrolling();
        }
    });
    function autoScrolling() {
        var $hh = $(window).height();
        if ($hh < 500) {
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    };
    if ($("#fp-nav ul li a.active").parent().index() === 0 || $("#fp-nav ul li a.active").parent().index() === 6) {
        $('#fp-nav').hide();
    }
});