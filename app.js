// ----- Testimonials Slider -----
const testimonialsSlider = document.querySelector('.testimonials-slider');
const testimonialsCard = document.querySelectorAll('.testimonials-card');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

next.addEventListener('click', slideRight);
prev.addEventListener('click', slideLeft);

function slideRight() {
  currentIndex++;
  if (currentIndex > testimonialsCard.length - 1) {
    currentIndex = 0;
  }
  updateSlider();
}

function slideLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = testimonialsCard.length - 1;
  }
  updateSlider();
}

function updateSlider () {
  testimonialsSlider.style.transform = `
    translateX(${-currentIndex * testimonialsCard[0].offsetWidth}px)
  `;
}

// ----- Gallery Slider -----
const buttonLeft = document.querySelector('.btn-left');
const buttonRight = document.querySelector('.btn-right');
const gallerySlider = document.querySelector('.gallery-slider');
const galleryImage = document.querySelectorAll('.gallery-image');

let currentPosition = 0;

buttonLeft.addEventListener('click', clickLeft);
buttonRight.addEventListener('click', clickRight);

function clickLeft () {
  currentPosition--;
  if (currentPosition < 0) {
    currentPosition = galleryImage.length - 1;
  }  
  startSlider();
}

function clickRight () {
 currentPosition++;
 if (currentPosition > galleryImage.length - 1) {
   currentPosition = 0;
 }
 startSlider();
}

function startSlider () {
  gallerySlider.style.transform = `
  translateX(${-currentPosition * galleryImage[0].offsetWidth}px)
`;
}

// Fixed Header to the Top
const header = document.getElementById('header');
const burger = document.getElementById('mobile-menu');
const buttonUp = document.getElementById('button-up');
const navLogo = document.querySelector('.nav-logo');
const navLink = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.nav-list');

// Fixed Header
function fixedHeader () {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {   
      header.classList.add('fixed-header'); 
      // Button Up
      buttonUp.style.display = 'block';
    } else {
      header.classList.remove('fixed-header');
      buttonUp.style.display = 'none';
    }
  });
}
fixedHeader();

// Back to Top after clicking
buttonUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// Opening a mobile menu
burger.addEventListener('click', (event) => {
  navList.classList.toggle('openSideNav');

  event.preventDefault();
});

// Closing a full screen mobile menu by clicking any navigation link
// Scrolling a webpage by clicking links
function closeMobileMenu () {
  navLink.forEach( (link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('openSideNav');
    });
  });
}

closeMobileMenu();