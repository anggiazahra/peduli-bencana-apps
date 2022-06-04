import Home from '../views/pages/home';
import DonasiPostingan from '../views/pages/donasiPostingan';
import DonasiPostinganDetail from '../views/pages/donasiPostinganDetail';
import DonasiPostinganTambah from '../views/pages/donasiPostinganTambah';
import DonasiPostinganEdit from '../views/pages/donasiPostinganEdit';
import DonasiTambah from '../views/pages/donasiTambah';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/donasi-postingan': DonasiPostingan,
  '/donasi-postingan-detail': DonasiPostinganDetail,
  '/donasi-postingan-tambah': DonasiPostinganTambah,
  '/donasi-postingan-edit': DonasiPostinganEdit,
  '/donasi-tambah': DonasiTambah,
};

export default routes;
