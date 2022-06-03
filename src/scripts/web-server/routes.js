/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const {
  addPostinganArtikelHandler,
  getAllPostinganArtikelHandler,
  getPostinganArtikelByIdHandler,
  editPostinganArtikelByIdHandler,
  deletePostinganArtikelByIdHandler,
} = require('./handler-postingan-artikel');

const routes = [
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
    method: 'DELETE',
    path: '/artikel/postingan/{postinganArtikelId}',
    handler: deletePostinganArtikelByIdHandler,
  },
];

module.exports = routes;
