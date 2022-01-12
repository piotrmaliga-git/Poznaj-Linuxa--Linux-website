const navSlide = () => {
   const burger = document.querySelector('.nav__burger-menu');
   const nav = document.querySelector('.nav__links');
   const navLinks = document.querySelectorAll('.nav__links li');


   burger.addEventListener('click', ()=>{
      
      // toggle navigation-bar
      nav.classList.toggle('nav-active');

      // link animation
      navLinks.forEach((link, index) => {
         if(link.style.animation){
            link.style.animation = '';
         } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
         }
      });

      // burger-menu animation
      burger.classList.toggle('toggle');

   });
}

navSlide();