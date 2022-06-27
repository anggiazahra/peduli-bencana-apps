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
    <li><button class="btn btn-logout" id="btn-logout">Logout</button></li>
  `;

  const buttonLogout = document.querySelector('#btn-logout');
  buttonLogout.addEventListener('click', async () => {
    const logout = await swal({
      title: 'Konfirmasi Logout',
      text: 'Apakah anda ingin keluar dari aplikasi?',
      icon: 'info',
      buttons: true,
    });

    if (logout) {
      window.location.replace('#/logout');
    }
  });
}
