const {
  addRegistrasiHandler,
  getAllRegistrasiHandler,
} = require('./handler-registrasi');

const {
  checkLoginHandler,
} = require('./handler-login');

const {
  addPostinganDonasiHandler,
  getAllPostinganDonasiHandler,
  getPostinganDonasiByIdHandler,
  editPostinganDonasiByIdHandler,
  editPostinganDonasiWithoutPosterByIdHandler,
  deletePostinganDonasiByIdHandler,
} = require('./handler-postingan-donasi');

const {
  addTambahDonasiHandler,
  getAllTambahDonasiHandler,
  putTambahDonasiHandler,
} = require('./handler-tambah-donasi');

const {
  addPostinganRelawanHandler,
  getAllPostinganRelawanHandler,
  getPostinganRelawanByIdHandler,
  editPostinganRelawanByIdHandler,
  editPostinganRelawanWithoutPosterByIdHandler,
  deletePostinganRelawanByIdHandler,
} = require('./handler-postingan-relawan');

const {
  addPendaftaranRelawanHandler,
  getAllPendaftaranRelawanHandler,
} = require('./handler-pendaftaran-relawan');

const {
  addPostinganArtikelHandler,
  getAllPostinganArtikelHandler,
  getPostinganArtikelByIdHandler,
  editPostinganArtikelByIdHandler,
  editPostinganArtikelWithoutgambarArtikelByIdHandler,
  deletePostinganArtikelByIdHandler,
} = require('./handler-postingan-artikel');

const routes = [
  {
    method: 'POST',
    path: '/registrasi',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data'],
        maxBytes: 10 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: addRegistrasiHandler,
  },
  {
    method: 'GET',
    path: '/registrasi',
    handler: getAllRegistrasiHandler,
  },
  {
    method: 'POST',
    path: '/login',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data'],
        maxBytes: 10 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: checkLoginHandler,
  },
  {
    method: 'POST',
    path: '/donasi/postingan',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data', 'image/jpeg'],
        maxBytes: 10 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: addPostinganDonasiHandler,
  },
  {
    method: 'GET',
    path: '/donasi/postingan',
    handler: getAllPostinganDonasiHandler,
  },
  {
    method: 'GET',
    path: '/donasi/postingan/{postinganDonasiId}',
    handler: getPostinganDonasiByIdHandler,
  },
  {
    method: 'PUT',
    path: '/donasi/postingan/{postinganDonasiId}',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data', 'image/jpeg'],
        maxBytes: 10 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: editPostinganDonasiByIdHandler,
  },
  {
    method: 'PUT',
    path: '/donasi/postingan-tanpa-poster/{postinganDonasiId}',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data'],
        maxBytes: 10 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: editPostinganDonasiWithoutPosterByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/donasi/postingan/{postinganDonasiId}',
    handler: deletePostinganDonasiByIdHandler,
  },
  {
    method: 'POST',
    path: '/donasi/tambah',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data'],
        maxBytes: 10 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: addTambahDonasiHandler,
  },
  {
    method: 'GET',
    path: '/donasi/tambah',
    handler: getAllTambahDonasiHandler,
  },
  {
    method: 'PUT',
    path: '/donasi/tambah/{donasiTambahId}',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data'],
        maxBytes: 10 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: putTambahDonasiHandler,
  },
  {
    method: 'POST',
    path: '/relawan/postingan',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data', 'image/jpeg'],
        maxBytes: 10 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: addPostinganRelawanHandler,
  },
  {
    method: 'GET',
    path: '/relawan/postingan',
    handler: getAllPostinganRelawanHandler,
  },
  {
    method: 'GET',
    path: '/relawan/postingan/{postinganRelawanId}',
    handler: getPostinganRelawanByIdHandler,
  },
  {
    method: 'PUT',
    path: '/relawan/postingan/{postinganRelawanId}',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data', 'image/jpeg'],
        maxBytes: 10 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: editPostinganRelawanByIdHandler,
  },
  {
    method: 'PUT',
    path: '/relawan/postingan-tanpa-poster/{postinganRelawanId}',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data'],
        maxBytes: 10 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: editPostinganRelawanWithoutPosterByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/relawan/postingan/{postinganRelawanId}',
    handler: deletePostinganRelawanByIdHandler,
  },
  {
    method: 'POST',
    path: '/relawan/pendaftaran',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data'],
        maxBytes: 10 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: addPendaftaranRelawanHandler,
  },
  {
    method: 'GET',
    path: '/relawan/pendaftaran',
    handler: getAllPendaftaranRelawanHandler,
  },
  {
    method: 'POST',
    path: '/artikel/postingan',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data', 'image/jpeg'],
        maxBytes: 2 * 2000 * 2000,
        multipart: true,
      },
    },
    handler: addPostinganArtikelHandler,
  },
  {
    method: 'GET',
    path: '/artikel/postingan',
    handler: getAllPostinganArtikelHandler,
  },
  {
    method: 'GET',
    path: '/artikel/postingan/{postinganArtikelId}',
    handler: getPostinganArtikelByIdHandler,
  },
  {
    method: 'PUT',
    path: '/artikel/postingan/{postinganArtikelId}',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data', 'image/jpeg'],
        maxBytes: 2 * 2000 * 2000,
        multipart: true,
      },
    },
    handler: editPostinganArtikelByIdHandler,
  },
  {
    method: 'PUT',
    path: '/artikel/postingan-tanpa-gambarArtikel/{postinganArtikelId}',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data', 'image/jpeg'],
        maxBytes: 2 * 2000 * 2000,
        multipart: true,
      },
    },
    handler: editPostinganArtikelWithoutgambarArtikelByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/artikel/postingan/{postinganArtikelId}',
    handler: deletePostinganArtikelByIdHandler,
  },
];

module.exports = routes;
