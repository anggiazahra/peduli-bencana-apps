import Home from '../views/pages/home';
import Mitigasi from '../views/pages/mitigasi';
import TentangKami from '../views/pages/tentangKami';
import DonasiPostingan from '../views/pages/donasiPostingan';
import DonasiPostinganDetail from '../views/pages/donasiPostinganDetail';
import DonasiPostinganTambah from '../views/pages/donasiPostinganTambah';
import DonasiPostinganEdit from '../views/pages/donasiPostinganEdit';
import DonasiTambah from '../views/pages/donasiTambah';
import DonasiRiwayat from '../views/pages/donasiRiwayat';
import DonasiKonfirmasi from '../views/pages/donasiKonfirmasi';
import Relawan from '../views/pages/relawan';
import RelawanDetail from '../views/pages/relawanDetail';
import RelawanDaftar from '../views/pages/relawanDaftar';
import RelawanTambah from '../views/pages/relawanTambah';
import RelawanEdit from '../views/pages/relawanEdit';
import RelawanRiwayat from '../views/pages/relawanRiwayat';
import Login from '../views/pages/login';
import Logout from '../views/pages/logout';
import Registrasi from '../views/pages/registrasi';
import LandingPage from '../views/pages/landingPage';
import Artikel from '../views/pages/artikel';
import ArtikelTambah from '../views/pages/artikelTambah';
import ArtikelDetail from '../views/pages/artikelDetail';
import ArtikelEdit from '../views/pages/artikelEdit';

const routes = {
  '/': LandingPage, // default page
  '/login': Login,
  '/logout': Logout,
  '/registrasi': Registrasi,
  '/home': Home,
  '/donasi-postingan': DonasiPostingan,
  '/donasi-postingan-detail/:id': DonasiPostinganDetail,
  '/donasi-postingan-tambah': DonasiPostinganTambah,
  '/donasi-postingan-edit/:id': DonasiPostinganEdit,
  '/donasi-tambah/:id': DonasiTambah,
  '/donasi-riwayat': DonasiRiwayat,
  '/donasi-konfirmasi/:id': DonasiKonfirmasi,
  '/relawan': Relawan,
  '/relawan-detail/:id': RelawanDetail,
  '/relawan-daftar/:id': RelawanDaftar,
  '/relawan-tambah': RelawanTambah,
  '/relawan-edit/:id': RelawanEdit,
  '/relawan-riwayat': RelawanRiwayat,
  '/mitigasi': Mitigasi,
  '/tentang-kami': TentangKami,
  '/artikel': Artikel,
  '/artikel-tambah': ArtikelTambah,
  '/artikel-detail/:id': ArtikelDetail,
  '/artikel-edit/:id': ArtikelEdit,
};

export default routes;
