function showSlides(n) {
    let slides = document.getElementsByClassName("main-modal__content-slide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  slides[slideIndex-1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

let slideIndex = 1;
showSlides(slideIndex);