<<<<<<< Updated upstream
/* eslint-disable quotes */
import "regenerator-runtime";
import App from "./views/app";

console.log("Hello Coders!");

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
=======
import 'regenerator-runtime';
import App from './views/app';

console.log('Hello Coders!');

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
>>>>>>> Stashed changes
  app.renderPage();
});
