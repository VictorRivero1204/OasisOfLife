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

setInterval(cambiarImagen,15000);

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
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", function(){

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});

// Booking inquiry form
const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
  const bookingStatus = document.getElementById("booking-form-status");
  const bookingButton = bookingForm.querySelector('button[type="submit"]');
  const bookingFrame = document.querySelector('iframe[name="booking-response-frame"]');
  let bookingSubmitted = false;

  window.addEventListener("message", function (event) {
    if (!bookingFrame || event.source !== bookingFrame.contentWindow) return;
    if (event.origin !== "https://script.google.com" && !event.origin.endsWith(".googleusercontent.com")) return;
    const result = event.data;
    if (!bookingSubmitted || !result || result.type !== "oasis-booking-result") return;
    bookingStatus.textContent = result.message;
    bookingButton.disabled = false;
    bookingButton.textContent = "Request a Call";
    if (result.success) bookingForm.reset();
    bookingSubmitted = false;
  });

  bookingForm.addEventListener("submit", function (event) {
    if (!bookingForm.reportValidity()) {
      event.preventDefault();
      return;
    }
    bookingSubmitted = true;
    bookingStatus.textContent = "Sending your request…";
    bookingButton.disabled = true;
    bookingButton.textContent = "Sending…";
    window.setTimeout(function () {
      if (bookingSubmitted) {
        bookingStatus.textContent = "Please call (845) 638-9772 if you don’t see a confirmation shortly.";
        bookingButton.disabled = false;
        bookingButton.textContent = "Request a Call";
        bookingSubmitted = false;
      }
    }, 12000);
  });
}
