new WOW().init();


$(document).ready(function() {
    // Добавить плавную прокрутку до всех ссылок
    $('a[href^="#"]').on('click', function(event) {

        // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
        if (this.hash !== "") {
            // Запретить поведение щелчка якоря по умолчанию
            event.preventDefault();

            // Хранить хэш
            var hash = this.hash;

            // Использование метода animate() jQuery для добавления плавной прокрутки страницы
            // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 8000, function() {

                // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
                window.location.hash = hash;
            });
        } // Конец, если
    });
});


$('select').niceSelect();


$(".tel-mask").mask("+7 (999) 999-99-99");




var swiper = new Swiper(".portfolio-slider", {

    // slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".portfolio-pagination",
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },

    navigation: {
        nextEl: '.portfolio-button__next',
    },


    breakpoints: {


        1200: {
            slidesPerView: 4,
            loop: true,
        },

        992: {
            slidesPerView: 3,

        },

        576: {
            slidesPerView: 2,
        },

        320: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 15,
        }

    },

});


var link = $('.menu-icon__block');
var link_active = $('.menu-link_active');
var menu = $('.menu');
var nav_link = $('.menu navbar li a[href^="#"]');

link.click(function() {
    link.toggleClass('menu-icon__active');
    menu.toggleClass('menu-mob-active');
});

nav_link.click(function() {
    link.removeClass('menu-icon__active');
    menu.toggleClass('menu-mob-active');
});



let modal = document.querySelector(".modal"),
    closePopup = $(".close-modal"),
    modalBtn = $(".open-popup");

modalBtn.click(function() {
    modal.classList.add("fadeInModal");
    $("body").toggleClass("overflow-hidden");
});


closePopup.click(function() {

    modal.classList.remove("fadeInModal");
    modal.classList.add("fadeOut");

    $("body").toggleClass("overflow-hidden");

    modal.addEventListener('animationend', function() {
        modal.classList.remove("fadeOut");
    });

});



var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
var navbar = document.getElementsByTagName("header")[0];
var navbarSticky = navbar.offsetTop;


$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {

    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }

}, 250);



function hasScrolled() {

    var st = $(this).scrollTop();


    if (window.pageYOffset <= 50) {

        $('header').addClass("fadeInDown");
        $('header').on('animationend', function() {
            $('header').removeClass("fadeInDown");
        });

        $('header').removeClass('menu-active__animation');

    } else {
        $('header').addClass('menu-active__animation');
    }

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {

        $('header').addClass('menu-active');
        // $(".nice-select").removeClass("open");

        // if($(".catalog-menu").hasClass('menu-open')){

        // 	$(".catalog-menu").removeClass("menu-open");
        // 	menuBtn.removeClass("menu-btn__active");
        // 	changeAnimation();
        // }

        $('.menu-header').removeClass('menu-header__active');

        if (window.matchMedia('screen and (max-width: 992px)').matches) {
            $(".menu-icon__block").removeClass("menu-icon__active");
            $(".menu").removeClass("menu-mob-active");
        }

    } else {

        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('menu-active');
        }
    }

    lastScrollTop = st;

}