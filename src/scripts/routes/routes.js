import Artikel from '../views/pages/artikel';
import ArtikelTambah from '../views/pages/artikelTambah';
import ArtikelDetail from '../views/pages/artikelDetail';
import ArtikelEdit from '../views/pages/artikelEdit';

const routes = {
  '/artikel': Artikel,
  '/artikel-tambah': ArtikelTambah,
  '/artikel-detail/:id': ArtikelDetail,
  '/artikel-edit/:id': ArtikelEdit,
};

export default routes;
