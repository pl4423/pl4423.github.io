// Hamburger Button even Listeners

// DOM variables

// Open Menu btn
var slideLeftBtn = document.querySelector('#hamburger-button');

// Main menu
var slideMenu = document.querySelector('#main-menu');

// Close menu btn
var closeMenuBtn = document.querySelector('#slide-menu-close-btn');

// Opens menu when open btn is clicked
slideLeftBtn.addEventListener('click', function(e) {
  e.preventDefault;

  var cl = 'is-active';

  if (slideMenu.classList) {
    slideMenu.classList.add(cl);
  } else {
    slideMenu.className += ' ' + cl;
  }
});

// Closes menu when open btn is clicked
closeMenuBtn.addEventListener('click', function(e) {
  e.preventDefault;

  console.log('button hit');

  var cl = 'is-active';

  if (slideMenu.classList) {
    slideMenu.classList.remove(cl);
  }
});