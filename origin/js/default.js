$(document).ready(function () {
    $('#full').fullpage({
        anchors: ['Page1', 'Page2', 'Page3', 'Page4', 'Page5', 'Page6', 'Page7'],
        navigation: true,
        navigationTooltips: ['Page1', 'Page2', 'Page3', 'Page4', 'Page5', 'Page6', 'Page7'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        //Scrolling 
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        scrollBar: false,
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        easingcss3: 'ease',
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        sectionsColor: ['#60e4cc', '#609be4', '#7749e6', '#a7377f', '#e0a77e', '#609be4', '#7749e6'],
        onLeave: function (index, nextIndex, direction) {
            console.log("leave" + index + '-' + nextIndex + '-' + direction);
            if (nextIndex === 1 || nextIndex === 7) {
                $('#fp-nav').hide(700);
            } else {
                $('#fp-nav').show(700);
            }
        },
        afterLoad: function (anchorLink, index) {
            console.log("load" + '-' + anchorLink + '-' + index);
        },
    });
});