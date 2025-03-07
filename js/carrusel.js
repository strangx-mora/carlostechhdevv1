let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-item");
    slideIndex = (slideIndex + step + slides.length) % slides.length;
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelector(".carousel-slide");
    const slideWidth = document.querySelector(".carousel-item").offsetWidth;
    slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}
