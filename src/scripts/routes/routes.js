/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import Home from "../views/pages/home";
import Donasi from "../views/pages/donasi";
import DonasiTambah from "../views/pages/donasiTambah";
import DonasiDetail from "../views/pages/donasiDetail";
import DonaturDaftar from "../views/pages/donaturDaftar";
import DonaturDetail from "../views/pages/donaturDetail";

const routes = {
  "/": Home, // default page
  "/home": Home,
  "/donasi": Donasi,
  "/donasi-tambah": DonasiTambah,
  "/donasi-detail": DonasiDetail,
  "/donatur-daftar": DonaturDaftar,
  "/donatur-detail": DonaturDetail,
};

export default routes;
