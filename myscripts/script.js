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

// Format the phone number input to (xxx)-xxx-xxxx
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function (e) {
  const phoneNumber = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !phoneNumber[2] ? phoneNumber[1] : `(${phoneNumber[1]})-${phoneNumber[2]}${phoneNumber[3] ? `-${phoneNumber[3]}` : ''}`;
});

document.addEventListener("DOMContentLoaded", function() {
  const figureWrappers = document.querySelectorAll(".figure-wrapper");

  figureWrappers.forEach((item, index) => {
      setTimeout(() => {
          item.classList.add("slide-in");
      }, index * 500); // Adjust the delay (500ms) as needed for your desired speed
  });
});

