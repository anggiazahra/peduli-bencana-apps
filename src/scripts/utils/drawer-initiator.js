<<<<<<< Updated upstream
/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener("click", (event) => {
=======
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
>>>>>>> Stashed changes
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
<<<<<<< Updated upstream
    drawer.classList.toggle("open");
=======
    drawer.classList.toggle('open');
>>>>>>> Stashed changes
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
<<<<<<< Updated upstream
    drawer.classList.remove("open");
=======
    drawer.classList.remove('open');
>>>>>>> Stashed changes
  },
};

export default DrawerInitiator;
