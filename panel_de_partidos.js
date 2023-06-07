
const carousel = document.querySelector('.panel_de_partidos_vert');
const carouselContainer = document.querySelector('.carrusel_de_partidos');
const carouselItems = document.querySelectorAll('.slide');

//Variables de control
let currentIndex = 0;
const itemWidth = carouselItems[0].offsetWidth;

function moveToNext(){
    if(currentIndex < carouselItems.length - 3){
        currentIndex++;
        carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    }
}

function moveToPrev(){
    if(currentIndex > 3){
        currentIndex--;
        carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
}

document.querySelector('#RIGHT_btn').addEventListener('click', moveToNext, true);
document.querySelector('#LEFT_btn').addEventListener('click', moveToPrev, true);

