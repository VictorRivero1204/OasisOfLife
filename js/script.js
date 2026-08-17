const about_slides = document.querySelectorAll(".about-slide");
const text_slides = document.querySelectorAll(".text-slide");

let index = 0;


function cambiarImagen(){

    about_slides[index].classList.remove("active");
    text_slides[index].classList.remove("active");


    index++;


    if(index >= about_slides.length){

        index = 0;

    }


    about_slides[index].classList.add("active");
    text_slides[index].classList.add("active");

}

setInterval(cambiarImagen,10000);

const slides = document.querySelectorAll(".slide");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

next.addEventListener("click", function(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

});

prev.addEventListener("click", function(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});

showSlide(currentSlide);

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function(){

    nav.classList.toggle("active");

});