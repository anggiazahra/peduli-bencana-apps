import Home from '../views/pages/home';
import DonasiPostingan from '../views/pages/donasiPostingan';
import DonasiPostinganDetail from '../views/pages/donasiPostinganDetail';
import DonasiPostinganTambah from '../views/pages/donasiPostinganTambah';
import DonasiPostinganEdit from '../views/pages/donasiPostinganEdit';
import DonasiTambah from '../views/pages/donasiTambah';
import Relawan from '../views/pages/relawan';
import RelawanDetail from '../views/pages/relawanDetail';
import RelawanDaftar from '../views/pages/relawanDaftar';
import RelawanTambah from '../views/pages/relawanTambah';
import RelawanEdit from '../views/pages/relawanEdit';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/donasi-postingan': DonasiPostingan,
  '/donasi-postingan-detail/:id': DonasiPostinganDetail,
  '/donasi-postingan-tambah': DonasiPostinganTambah,
  '/donasi-postingan-edit/:id': DonasiPostinganEdit,
  '/donasi-tambah/:id': DonasiTambah,
  '/relawan': Relawan,
  '/relawan-detail/:id': RelawanDetail,
  '/relawan-daftar/:id': RelawanDaftar,
  '/relawan-tambah': RelawanTambah,
  '/relawan-edit/:id': RelawanEdit,
};

export default routes;
