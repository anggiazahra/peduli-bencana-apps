import "regenerator-runtime";
import App from "./views/app";
const hamburgerButtonElement = document.querySelector("#hamburgerButton");
const drawerElement = document.querySelector("#navigationDrawer");

hamburgerButtonElement.addEventListener("click", (event) => {
  drawerElement.classList.toggle("open");
  event.stopPropagation();
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
    app.renderPage();
  });
});
