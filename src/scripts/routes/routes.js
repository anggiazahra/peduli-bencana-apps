import Home from '../views/pages/home';
import Relawan from '../views/pages/relawan';
import RelawanDetail from '../views/pages/relawanDetail';
import RelawanDaftar from '../views/pages/relawanDaftar';
import RelawanTambah from '../views/pages/relawanTambah';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/relawan': Relawan,
  '/relawan-detail': RelawanDetail,
  '/relawan-daftar': RelawanDaftar,
  '/relawan-tambah': RelawanTambah,
};

export default routes;
