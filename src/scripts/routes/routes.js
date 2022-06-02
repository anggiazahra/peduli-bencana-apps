import Home from '../views/pages/home';
import Relawan from '../views/pages/relawan';
import RelawanDetail from '../views/pages/relawanDetail';
import RelawanDaftar from '../views/pages/relawanDaftar';
import RelawanTambah from '../views/pages/relawanTambah';
import RelawanEdit from '../views/pages/relawanEdit';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/relawan': Relawan,
  '/relawan-detail/:id': RelawanDetail,
  '/relawan-daftar/:id': RelawanDaftar,
  '/relawan-tambah': RelawanTambah,
  '/relawan-edit/:id': RelawanEdit,
};

export default routes;
