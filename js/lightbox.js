(function () {
    let prev = document.querySelector(".product-page__main-gallery--prev");
    let next = document.querySelector(".product-page__main-gallery--next");

    prev.addEventListener("click", () => {
        plusSlides(-1);
        thumbnailModal[slideIndex].classList.toggle("active");
        thumbnailModal[slideIndex + 1].classList.remove("active");
    })

    next.addEventListener("click", () => {
        plusSlides(1);
        thumbnailModal[slideIndex].classList.toggle("active");
        thumbnailModal[slideIndex - 1].classList.remove("active");
    })
})();

const thumbnailModal = document.querySelectorAll('[data-thumbmodal]');

function showSlides(n) {
    let slides = document.getElementsByClassName("main-modal__content-slide");


    if (n >= slides.length) {
        slideIndex = 0;
        thumbnailModal[n - 1].classList.remove("active");
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
        thumbnailModal[n + 1].classList.remove("active");
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";

    for (let i = 0; i < thumbnailModal.length; i++) {
        thumbnailModal[i].addEventListener('click', () => {
            slideIndex = i;
            showSlides(slideIndex);
            for (let j = 0; j < thumbnailModal.length; j++) {
                thumbnailModal[j].classList.remove("active");
            }
            thumbnailModal[slideIndex].classList.toggle("active");
        })

    }

    relateModalAndMain();
}

function plusSlides(n) {
    slideIndex += n
    showSlides(slideIndex);

}

let slideIndex = 0;
showSlides(slideIndex);

const galleryModal = document.querySelector('[data-modal]');

function relateModalAndMain() {
    const openGallery = document.querySelectorAll('[data-enter]');
    const lightboxOpened = document.querySelectorAll('[data-lightbox]');

    for (let i = 0; i < openGallery.length; i++) {
        openGallery[i].addEventListener('click', () => {
            galleryModal.style.display = "flex";
            slideIndex = i;
            showSlides(slideIndex);
            thumbnailModal[i].classList.add("active");

            for (let j = 0; j < lightboxOpened.length; j++) {
                lightboxOpened[j].style.display = "none";

            }
            lightboxOpened[i].style.display = "flex";

        })
    };
}

const closeButton = document.querySelector('[data-exit]');
closeButton.addEventListener('click', () => {
    galleryModal.style.display = "none";
    for (let i = 0; i < thumbnailModal.length; i++) {
        thumbnailModal[i].classList.remove("active");

    }

})
closeButton.addEventListener('contextmenu', (e) => { e.preventDefault() })

const mainGalleryThumbnails = document.querySelectorAll('[data-thumb]');
const mainGallerySlides = document.querySelectorAll(".main-gallery__container");

(function () {
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
})();
