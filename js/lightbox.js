function controlSlide() {
    let prev = document.querySelector(".product-page__main-gallery--prev");
    let next = document.querySelector(".product-page__main-gallery--next");

    prev.addEventListener("click", () => {
        plusSlides(-1);
    })

    next.addEventListener("click", () => {
        plusSlides(1);
    })
}

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
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

let slideIndex = 1;
showSlides(slideIndex);
controlSlide();

const galleryModal = document.querySelector('[data-modal]');

const openGallery = document.querySelectorAll('[data-enter]');
const lightboxOpened = document.querySelectorAll('[data-lightbox]');
for (let i = 0; i < openGallery.length; i++) {
    openGallery[i].addEventListener('click', () => {
        galleryModal.style.display = "flex";
        for (let j = 0; j < lightboxOpened.length; j++) {
            lightboxOpened[j].style.display = "none";
        }
        lightboxOpened[i].style.display = "flex";
    })
};

const closeButton = document.querySelector('[data-exit]');
closeButton.addEventListener('click', () => { galleryModal.style.display = "none" })
closeButton.addEventListener('contextmenu', (e) => { e.preventDefault() })

const mainGalleryThumbnails = document.querySelectorAll('[data-thumb]');
const mainGallerySlides = document.querySelectorAll(".main-gallery__container");

function thumbControl() {
    for (let i = 0; i < mainGallerySlides.length; i++) {
        mainGallerySlides[i].style.display = "none";
    }

    mainGallerySlides[0].style.display = "flex";

    for (let i = 0; i < mainGalleryThumbnails.length; i++) {
        mainGalleryThumbnails[i].addEventListener('click', () => {
            for (let j = 0; j < mainGallerySlides.length; j++) {
                mainGallerySlides[j].style.display = "none";
                mainGalleryThumbnails[j].classList.remove("active");
            }
            mainGallerySlides[i].style.display = "flex";
            mainGalleryThumbnails[i].classList.toggle("active");
        })
    }
}

thumbControl();