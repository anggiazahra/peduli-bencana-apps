const {
  addPostinganRelawanHandler,
  getAllPostinganRelawanHandler,
  getPostinganRelawanByIdHandler,
  editPostinganRelawanByIdHandler,
  deletePostinganRelawanByIdHandler,
} = require('./handler-postingan-relawan');

const {
  addPendaftaranRelawanHandler,
  getAllPendaftaranRelawanHandler,
} = require('./handler-pendaftaran-relawan');

const routes = [
  {
    method: 'POST',
    path: '/relawan/postingan',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['application/json', 'multipart/form-data', 'image/jpeg'],
        maxBytes: 2 * 1000 * 1000,
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
        maxBytes: 2 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: editPostinganRelawanByIdHandler,
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
        allow: ['application/json', 'multipart/form-data', 'image/jpeg'],
        maxBytes: 2 * 1000 * 1000,
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
];

module.exports = routes;
