$(document).ready(function($) {

    // Sticky Header
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $('.header').addClass('is-sticky');
        } else {
            $('.header').removeClass('is-sticky');
        }
    });
    if ($('.header').length) {
        $('.navbar-toggler').click(function() {
            $('.navbar').toggleClass('open');
            $('body').toggleClass('overflow-hidden');
            
        });
    }


    //testimonial-slider
    if ($('.testimonial-wrapper').length) {
        var banner_slide = new Swiper(".testimonial-swiper", {
            loop: false,
            speed: 3000,
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: false,
            navigation: {
                nextEl: ".testimonial-button-next",
                prevEl: ".testimonial-button-prev",
            },
        });
    }

    //gallery-slider
    if ($('.footer-gallery').length) {
        var galleryslide = new Swiper(".gallery-slider", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            speed: 2000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 30,
                },
            },
        });
    }

    //booking-tab
    $('.tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    // Click function
    $('.tabs-nav li').click(function() {
        $('.tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).show();
        return false;
    });

});