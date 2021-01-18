const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__mobile-nav");
const menuLine = document.querySelector(".header__menu-line");
const menuLine2 = document.querySelector(".header__menu-line-2");
const menuLine3 = document.querySelector(".header__menu-line-3");
const body = document.querySelector("body");
const menuLink = document.querySelector(".header__mobile-link");
const menuLink2 = document.querySelector(".header__mobile-link-2");
const menuLink3 = document.querySelector(".header__mobile-link-3");
const menuLink4 = document.querySelector(".header__mobile-link-4");

// клик по кнопке
menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    menuLine.classList.toggle("active-line");
    menuLine2.classList.toggle("active-line");
    menuLine3.classList.toggle("active-line");
    body.classList.toggle("hidden");
});

menuLink.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    menuLine.classList.toggle("active-line");
    menuLine2.classList.toggle("active-line");
    menuLine3.classList.toggle("active-line");
    body.classList.toggle("hidden");
});
menuLink2.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    menuLine.classList.toggle("active-line");
    menuLine2.classList.toggle("active-line");
    menuLine3.classList.toggle("active-line");
    body.classList.toggle("hidden");
});
menuLink3.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    menuLine.classList.toggle("active-line");
    menuLine2.classList.toggle("active-line");
    menuLine3.classList.toggle("active-line");
    body.classList.toggle("hidden");
});
menuLink4.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    menuLine.classList.toggle("active-line");
    menuLine2.classList.toggle("active-line");
    menuLine3.classList.toggle("active-line");
    body.classList.toggle("hidden");
});

$(document).ready(function(){
    $('.gallery__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,
        prevArrow: ".gallery__button-prew",
        nextArrow: ".gallery__button-next",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 2,
                centerMode: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                arrows: false,
                centerMode: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: true,
                // customPaging: "40px",
                }
            },
        ]
    });
});
