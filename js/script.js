var myButton = document.getElementById("toTopBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
    $('.users__slider').slick({
        dots: true,
        speed: 500
    });

    $('.parallax-window').parallax({ imageSrc: '../img/portfolio/portfolio-bg.png' });
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("header__close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var submit = document.getElementById("inputSubmit");
var yourName = document.getElementById("inputName");
var yourAge = document.getElementById("inputAge");

submit.onclick = function () {
    console.log(`Your name is ${yourName.value}. Your age is ${yourAge.value}`);
    modal.style.display = "none";
}

const btnMenu = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.header__wrap-nav');

function toggleMobileMenu() {
    btnMenu.classList.toggle('header__btn-menu--open');
    menu.classList.toggle('header__wrap-nav--open');
}

btnMenu.addEventListener('click', toggleMobileMenu);