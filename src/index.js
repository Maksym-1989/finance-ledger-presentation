import './sass/main.scss';
import $ from 'jquery';
import WOW from 'wow.js';

const header = document.querySelector('header');
const inputEmailRef = document.getElementById('email');
const errorMessageRef = document.querySelector('.form_error-message');

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 0);
});

$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - header.offsetHeight + 1,
        },
        800,
      );
    }
  });
});


inputEmailRef.addEventListener('focus', function (e) {
  errorMessageRef.classList.add('form_error-message--hide');
});

inputEmailRef.addEventListener('blur', function (e) {
  const { value } = e.target;
  if (!value) {
    errorMessageRef.classList.remove('form_error-message--hide');
  }
});

/////////////////////////////////////////////////////////////////////animation///////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.services__list-item');
  const root = document.querySelector(':root');
  const rootStyles = getComputedStyle(root);
  // const whiteColor = rootStyles.getPropertyValue('--white-text-cl');
  // const yellowColor = rootStyles.getPropertyValue('--yellow-bg');

  function addColors(elem) {
    const card = elem.target;
    const icon = elem.target.childNodes[1];
    const text = elem.target.childNodes[3];
    card.classList.add('active-1');
    icon.classList.add('active-2');
    text.classList.add('active-3');
  }

  function removeColors(elem) {
    const card = elem.target;
    const icon = elem.target.childNodes[1];
    const text = elem.target.childNodes[3];
    card.classList.remove('active-1');
    icon.classList.remove('active-2');
    text.classList.remove('active-3');
  }

  const onEntry = entries => {
    entries.map(entry => {
      if (entry.isIntersecting) {
        setTimeout(addColors(entry), 500);
      } else {
        setTimeout(removeColors(entry), 500);
      }
    });
  };

  const options = {
    threshold: 1,
  };

  const observer = new IntersectionObserver(onEntry, options);

  cards.forEach(card => {
    observer.observe(card);
  });
});

window.addEventListener('DOMContentLoaded', function () {
  const wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 286, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });

  wow.init();
});
