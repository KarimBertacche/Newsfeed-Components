
const toggleMenu = () => {
  menu.classList.toggle('menu--open'); 
  menuButton.classList.toggle('btn-slide');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// document.addEventListener('click', (event) => {
//    else if(event.screenY !== 116){
//     menuButton.classList.toggle('btn-slide'); 
//   } 
// })