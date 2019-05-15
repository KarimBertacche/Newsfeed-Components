const toggleMenu = () => {
  menu.classList.toggle('menu--open'); 
  menuButton.classList.replace('menu--open', 'btn-slide');
}

const windowToggle = (event) => {
  if(event.target !== 'img.menu-button'){
    menuButton.classList.replace('btn-slide', 'menu--open');
  }
}



// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
window.addEventListener('click', windowToggle);


