/*global $,console,Swiper,WOW */

$(function () {
    "use strict";
    
    // Variables
    var counter = false,
        screenShotSlider,
        screenShotSlider__2,
        testimonialsSlider,
        clientLogoSlider,
        statisticsCounter = $('.timer');

    /** Counter
     **====================== **/
    function startCounter() {
        if (statisticsCounter.length && !counter) {
            var windowScroll = $(window).scrollTop(),
                timerPosition = statisticsCounter.offset().top,
                windowHeight = $(window).height();
            if (windowScroll - timerPosition + windowHeight >= 0) {
                counter = statisticsCounter.countTo();
            }
        }
    }
    startCounter();
    /** => End Counter */

    /** Smooth Scrolling
     **====================== **/
    $(".appsLand-links > li > a, .scrollLink").on('click', function (e) {
        var className = $(this).attr("href");
        console.log (className);
        if (className.charAt(0) === "#") {
            e.preventDefault();
            var hash = this.hash,
                scrollTopOffset = $(hash).offset().top;
            $('html, body').animate({
                scrollTop: scrollTopOffset
            }, 500);
        }
    });
    /** => End Smooth Scrolling */

    /** Scroll To Top
     **====================== **/
    $(".scrollToTop").on('click', function (e) {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    /** => Scroll To Top */

    /** navBar animation on scroll
     **=========================== **/
    function activeNavBar() {
        if ($(window).scrollTop() > 0) {
            $(".appsLand-navbar").addClass("active-navbar");
        } else {
            $(".appsLand-navbar").removeClass("active-navbar");
        }
    }
    activeNavBar();
    /** => End navBar animation on scroll */

    /** Screen Shots Slider
     **=========================== **/
    screenShotSlider = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        nextButton: '.screenShots__style-1__btn-next',
        prevButton: '.screenShots__style-1__btn-prev',
        paginationClickable: true,
        spaceBetween: 40,
        initialSlide: 0,
        loop: true,
        coverflow: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1
        }
    });
    screenShotSlider__2 = new Swiper('.screenshots-slider-container__2', {
        pagination: '.swiper-pagination',
        centeredSlides: true,
        slidesPerView: 'auto',
        paginationClickable: true,
        nextButton: '.screenShots__style-2__btn-next',
        prevButton: '.screenShots__style-2__btn-prev',
        loop: true,
        effect: 'cube',
        grabCursor: true,
        cube: {
            shadow: false,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 1
        }
    });
    /** => End Screen Shots Slider */

    /** Testimonials Slider
     **=========================== **/
    testimonialsSlider = new Swiper('.testimonials-slider-container', {
        pagination: '.testimonials-slider-pagination',
        effect: 'flip',
        grabCursor: true,
        nextButton: '.testimonials-slider-button-next',
        prevButton: '.testimonials-slider-button-prev',
        loop: true
    });
    /** => End Testimonials Slider */

    /** Client Logo Slider
     **====================== **/
    clientLogoSlider = new Swiper('.clientLogos-slider-container', {
        slidesPerView: 6,
        loop: true,
        // Responsive breakpoints
        breakpoints: {
            991: {
                slidesPerView: 4
            },
            640: {
                slidesPerView: 3
            },
            480: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
        }
    });
    /** => End Client Logo Slider */

    /** option menu
     **====================== **/
    $(".option-template-menu-open").on("click", function () {
        $(this).parent().toggleClass("active");
    });
    // theme colors
    $(".color-list a").on('click', function (e) {
        e.preventDefault();
        $(".color-list li").removeClass("active");
        $(this).parent().addClass("active");
        $("#color-option").attr("href", $(this).attr("href"));
    });
    /** => End option menu */

    /** Navbar dropdown menu
     **====================== **/
    $('.dropdown').hover(function () {
        $(this).addClass("open");
    }, function () {
        $(this).removeClass("open");
    });
    /** => End Navbar dropdown */

    /** mobile menu
     **====================== **/
    $(".menu-toggle").on("click", function () {
        $('.appsLand-navbar').toggleClass("mobile-menu-active");
    });
    // close the mobile menu

    /** => End mobile menu */

    // get the height of the footer and make padding to body equal to the footer height
    function footerHeight() {
        $("body").css({
            "paddingBottom": $(".apps-footer").height() + "px"
        });
    }

    /*********************** [ On Window Load ] ***********************/
    $(window).on("load", function () {
        // stop the video after close the modal
        $('#myModal').on('hidden.bs.modal', function () {
            $('#popup-youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        });
        // get the height of the footer and make padding to body equal to the footer height
        footerHeight();
        // remove the preload
        $(".loading").animate({
            "opacity": 0
        }, 500, function () {
            $(this).remove();
        });
        // start WOW animation
        new WOW().init();
        // Fire the tooltip
        $('[data-toggle="tooltip"]').tooltip();
    });
    /*********************** [ On Window Load ] ***********************/

    /*********************** [ On Window Scroll ] ***********************/
    $(window).on("scroll", function () {
        // navBar active on scroll
        activeNavBar();
        // Statistics Counter
        startCounter();
        // show scroll to top btn
        if ($(window).scrollTop() > 1000) {
            $(".scrollToTop").addClass("active");
        } else {
            $(".scrollToTop").removeClass("active");
        }
    });
    /*********************** [ On Window Scroll ] ***********************/

    /*********************** [ On Window Resize ] ***********************/
    $(window).on("resize", function () {
        // get the height of the footer and make padding to body equal to the footer height
        footerHeight();
    });
    /*********************** [ On Window Resize ] ***********************/

});