// const fs = require('fs');
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
} = require('./handler-tambah-donasi');

const routes = [
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
        allow: ['application/json', 'multipart/form-data', 'image/jpeg'],
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
        allow: ['application/json', 'multipart/form-data', 'image/jpeg'],
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
];

module.exports = routes;
