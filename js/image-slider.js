const imageSlide = document.querySelector('.section__gallery-slider');
const imageImages = document.querySelectorAll('.section__gallery-image');

const previous = document.querySelector('#previous');
const next = document.querySelector('#next');

// counter
let counter = 1;
const size = imageSlide.clientWidth;
imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

console.log(imageSlide.clientWidth)

// buttons
previous.addEventListener('click', () => {
   if (counter <= 0) return;
   imageSlide.style.transition = "transform 0.5s ease-in-out";
   counter--;
   imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

next.addEventListener('click', () => {
   if (counter >= imageImages.length - 1) return;
   imageSlide.style.transition = "transform 0.5s ease-in-out";
   counter++;
   imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

imageSlide.addEventListener('transitionend', () => {
   if (imageImages[counter].id === 'last') {
      imageSlide.style.transition = "none";
      counter = imageImages.length - 2;
      imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
   }
   if (imageImages[counter].id === 'first') {
      imageSlide.style.transition = "none";
      counter = imageImages.length - counter;
      imageSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
   }
});