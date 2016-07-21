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
        responsiveWidth: 900,
        responsiveHeight: 600,
        autoScrolling: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'cubic-bezier(0.86, 0, 0.07, 1)',
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        sectionsColor: ['#60e4cc', '#609be4', '#7749e6', '#a7377f', '#e0a77e', '#609be4', '#7749e6'],
        onLeave: function (index, nextIndex, direction) {
            console.log("leave" + index + '-' + nextIndex + '-' + direction);
            if ($(window).width() >= 900 && $(window).height() >= 600) {
                if (nextIndex === 1 || nextIndex === 7) {
                    $('#menu').hide();
                    $('#fp-nav').hide(700);
                } else {
                    $('#fp-nav').show(700);
                }
            }
        },
        afterLoad: function (anchorLink, index) {
            console.log("load" + '-' + anchorLink + '-' + index);
            if ($(window).width() >= 900 && $(window).height() >= 600) {
                if (index !== 1 && index !== 7) {
                    $('#menu').show();
                }
            }
        },
        afterRender: function () {
        },
        afterResize: function () {
        }
    });

    if ($("#fp-nav ul li a.active").parent().index() === 0 || $("#fp-nav ul li a.active").parent().index() === 6) {
        $('#fp-nav').hide();
    }
});