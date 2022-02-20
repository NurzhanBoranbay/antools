
window.addEventListener('DOMContentLoaded', () => {

   // Burger меню
   const burger = document.querySelector('.burger');
   const navActive = document.querySelector('.header__nav');
   
   burger.addEventListener('click', () => {
      navActive.classList.toggle('active');
      if (navActive.classList.contains('active')) {
         burger.classList.add('close');
      } else {
         burger.classList.remove('close');
      }
   });

   // Active card


   function activeCard(cardsSelector, event) {

      const cards = document.querySelectorAll(cardsSelector);

      cards.forEach((card, i) => {
         card.addEventListener(event, () => {
            if (event == 'mouseover') {
               card.classList.add('active-card');
            } else {
               card.classList.remove('active-card');
            }
         });
      });
   }

   activeCard('.popular-tools__item', 'mouseover');
   activeCard('.popular-tools__item', 'mouseout');
   activeCard('.newcomer-tools__inner-rigth-item', 'mouseover');
   activeCard('.newcomer-tools__inner-rigth-item', 'mouseout');


   // Slider

   const sliders = document.querySelectorAll('.commentary__block'),
         prevBtn = document.querySelector('.prev-btn'),
         nextBtn = document.querySelector('.next-btn'),
         numSlide = document.querySelectorAll('.slider-num span'),
         parentNumSlide = document.querySelector('.slider-num');

   let slideIndex = 1;

   function hideSlider() {
      sliders.forEach(slide => {
         slide.classList.add('animated');
         slide.style.display = 'none';
      });
   }

   function activeSlideNum(num) {
      numSlide.forEach(n => n.classList.remove('active-span'));
      numSlide[num].classList.add('active-span');
   }

   hideSlider();
   sliders[slideIndex].style.display = 'flex';

   numSlide.forEach(n => n.classList.remove('active-span'));
   numSlide[slideIndex].classList.add('active-span');

   nextBtn.addEventListener('click', () => {
      slideIndex++;

      if (slideIndex > sliders.length - 1) {
         slideIndex = 0;
      }

      sliders[slideIndex].classList.remove('slideInRight');
      sliders[slideIndex].classList.add('fadeOut');

      hideSlider();

      sliders[slideIndex].classList.remove('fadeOut');
      sliders[slideIndex].classList.add('slideInRight');
      sliders[slideIndex].style.display = 'flex';

      activeSlideNum(slideIndex);

   });

   prevBtn.addEventListener('click', () => {
      slideIndex--;

      if (slideIndex < 0) {
         slideIndex = sliders.length - 1;
      }

      sliders[slideIndex].classList.remove('slideInLeft');
      sliders[slideIndex].classList.add('animated', 'fadeOut');

      hideSlider();

      sliders[slideIndex].classList.remove('fadeOut');
      sliders[slideIndex].classList.add('slideInLeft');

      sliders[slideIndex].style.display = 'flex';

      activeSlideNum(slideIndex);

   });

   parentNumSlide.addEventListener('click', event => {
      if (event.target.tagName == 'SPAN') {
         numSlide.forEach((num, i) => {
            if (event.target == num) {
               activeSlideNum(i);
               slideIndex = i;
               hideSlider();
               sliders[i].style.display = 'flex';
            }
         });
      }
   });  

   // Modal

   const modal = document.querySelector('.modal-login'),
         loginBtn = document.querySelector('.login__entry'),
         close = document.querySelector('.close strong');

   loginBtn.addEventListener('click', event => {
      event.preventDefault();
      let target = event.target;

      modal.classList.remove('fadeOut');
      modal.classList.add('animated', 'fadeIn');
      modal.style.display = 'block';
   });

   modal.addEventListener('click', e => {
      if (e.target == modal || e.target == close) {
         modal.classList.remove('fadeIn');
         modal.classList.add('fadeOut');
         setTimeout(() => modal.style.display = 'none', 500);
      }
   });

});