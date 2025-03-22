const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

nextBtn.addEventListener('click', () => {
    if (index < carousel.children.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = carousel.children.length - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -index * 33.3;
    carousel.style.transform = `translateX(${offset}%)`;
}
