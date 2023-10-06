const carousel = document.querySelector('.carousel-container');
const projectImages = document.querySelectorAll('.project-image');
const cards = document.querySelectorAll('.card');
const descriptions = document.querySelectorAll('.description');
const cardWidth = cards[0].offsetWidth;
let currentIndex = 0;

function moveToCard(index) {
    if (index < 0) {
        index = cards.length - 1;
    } else if (index >= cards.length) {
        index = 0;
    }
    descriptions.forEach((description) => {
        description.style.opacity = 0;
    })
    descriptions[index].style.opacity = 1;
    projectImages.forEach ((projectImage) => {
      projectImage.style.boxShadow = '0px 0px 0px rgba(0,0,0,.6);';
    })
    
    cards.forEach((card) => {
        card.style.flexBasis = '150px';
        card.style.alignSelf = 'center';

    })
    cards[index].style.flexBasis = '300px';
    const offset = -index * cardWidth;
    const translateX = offset + cardWidth / 2 - carousel.clientWidth / 2;
    carousel.style.transform = `translateX(${translateX-150}px)`;
    currentIndex = index;
}


// Previous and Next buttons
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

prevButton.addEventListener('click', () => moveToCard(currentIndex - 1));
nextButton.addEventListener('click', () => moveToCard(currentIndex + 1));

moveToCard(currentIndex);
