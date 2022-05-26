const hamburgerButtonElement = document.querySelector('#hamburgerButton');
const drawerElement = document.querySelector('#navigationDrawer');

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});
