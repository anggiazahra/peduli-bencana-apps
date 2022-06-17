import 'regenerator-runtime';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

const navbar = document.querySelector('#navigationDrawer ul');
const loginSession = sessionStorage.getItem('loginSession');

if (loginSession === null) {
  sessionStorage.setItem('loginSession', 'false');
}

if (loginSession === 'true') {
  navbar.innerHTML = `
    <li><a href="#/home">Home</a></li>
    <li><a href="#/mitigasi">Mitigasi</a></li>
    <li><a href="#/artikel">Artikel</a></li>
    <li><a href="#/donasi-postingan">Donasi</a></li>
    <li><a href="#/relawan">Relawan</a></li>
    <li><a href="#/logout" class="btn btn-logout">Logout</a></li>`;
}
