'use strict';

//-----nav-bar-----

const navSlide = () => {
  const burger = document.querySelector('.nav__burger-menu');
  const nav = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('.nav__links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });

    burger.classList.toggle('toggle');
  });
};

navSlide();

//-----image-slider-----

const imageSlide = document.querySelector('.section__gallery-slider');
const imageImages = document.querySelectorAll('.section__gallery-image');

const previous = document.querySelector('#previous');
const next = document.querySelector('#next');

let counter = 1;
const size = imageSlide.clientWidth;
imageSlide.style.transform = 'translateX(' + -size * counter + 'px)';

console.log(imageSlide.clientWidth);

previous.addEventListener('click', () => {
  if (counter <= 0) return;
  imageSlide.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  imageSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

next.addEventListener('click', () => {
  if (counter >= imageImages.length - 1) return;
  imageSlide.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  imageSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

imageSlide.addEventListener('transitionend', () => {
  if (imageImages[counter].id === 'last') {
    imageSlide.style.transition = 'none';
    counter = imageImages.length - 2;
    imageSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }
  if (imageImages[counter].id === 'first') {
    imageSlide.style.transition = 'none';
    counter = imageImages.length - counter;
    imageSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }
});
