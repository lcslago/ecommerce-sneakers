(function () {
    let prev = document.querySelector(".product-page__main-gallery--prev");
    let next = document.querySelector(".product-page__main-gallery--next");


    prev.addEventListener("click", () => {
        navigateGallery(-1, button);
    })
    navigateGalleryWithKeys('ArrowLeft', -1, prev);

    next.addEventListener("click", () => {
        navigateGallery(1, button);
    })
    navigateGalleryWithKeys('ArrowRight', 1, next);

    preventContextMenu(prev);
    preventContextMenu(next);
})();

function navigateGalleryWithKeys(keyPressed, indexNavigation, button) {
    window.addEventListener('keydown', (e) => {
        if (e.key === keyPressed) {
            navigateGallery(indexNavigation, button);
        }
    })

    window.addEventListener('keyup', (e) => {
        if (e.key === keyPressed) {
            button.classList.remove("gallery-buttons--active");
        }
    })
}

function navigateGallery(indexNavigation, button) {
    plusSlides(indexNavigation);
    thumbnailModal[slideIndex].classList.toggle("active");
    button.classList.toggle("gallery-buttons--active");

    if (indexNavigation === -1) {
        thumbnailModal[slideIndex + 1].classList.remove("active");
    }

    if (indexNavigation === 1) {
        thumbnailModal[slideIndex - 1].classList.remove("active");
    }
}

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
    relateModalAndMain();
}

function plusSlides(n) {
    slideIndex += n
    showSlides(slideIndex);
}

let slideIndex = 0;
showSlides(slideIndex);

(function () {
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
})()

thumbnailModal.forEach(thumbnail => {
    preventContextMenu(thumbnail);
})

const galleryModal = document.querySelector('[data-modal]');

function relateModalAndMain() {
    const openGallery = document.querySelectorAll('[data-enter]');
    const lightboxOpened = document.querySelectorAll('[data-lightbox]');

    for (let i = 0; i < openGallery.length; i++) {
        openGallery[i].addEventListener('click', () => {
            galleryModal.style.display = "flex";
            thumbnailModal[i].classList.add("active");

            for (let j = 0; j < lightboxOpened.length; j++) {
                lightboxOpened[j].style.display = "none";
            }
            lightboxOpened[i].style.display = "flex";

        })
    };
}


(function () {
    const openGallery = document.querySelectorAll('[data-enter]');
    for (let i = 0; i < openGallery.length; i++) {
        openGallery[i].addEventListener('click', () => {
            slideIndex = i;
            showSlides(slideIndex);
        })
    }
})();

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        galleryModal.style.display = "none";
        removeThumbnailOverlay();
    }
})

const closeButton = document.querySelector('[data-exit]');
preventContextMenu(closeButton);
closeButton.addEventListener('click', () => {
    galleryModal.style.display = "none";
    removeThumbnailOverlay();
})

const mainGalleryThumbnails = document.querySelectorAll('[data-thumb]');
const mainGallerySlides = document.querySelectorAll(".main-gallery__container");

(function () {
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

mainGallerySlides.forEach(slide => {
    preventContextMenu(slide);
});
mainGalleryThumbnails.forEach(thumbnail => {
    preventContextMenu(thumbnail);
})

function preventContextMenu(element) {
    element.addEventListener('contextmenu', (e) => { e.preventDefault() });
}

function removeThumbnailOverlay() {
    thumbnailModal.forEach(thumbnail => {
        thumbnail.classList.remove("active");
    })
}