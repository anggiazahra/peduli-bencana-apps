/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
const {
  addPostinganDonasiHandler,
  getAllPostinganDonasiHandler,
  getPostinganDonasiByIdHandler,
  editPostinganDonasiByIdHandler,
  deletePostinganDonasiByIdHandler,
} = require("./handler-postingan-donasi.js");

const {
  addPendaftaranDonasiHandler,
  getAllPendaftaranDonasiHandler,
} = require("./handler-pendaftaran-Donasi");

const routes = [
  {
    method: "POST",
    path: "/donasi/postingan",
    config: {
      payload: {
        output: "stream",
        parse: true,
        allow: ["application/json", "multipart/form-data", "image/jpeg"],
        maxBytes: 2 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: addPostinganDonasiHandler,
  },
  {
    method: "GET",
    path: "/donasi/postingan",
    handler: getAllPostinganDonasiHandler,
  },
  {
    method: "GET",
    path: "/donasi/postingan/{postinganDonasiId}",
    handler: getPostinganDonasiByIdHandler,
  },
  {
    method: "PUT",
    path: "/donasi/postingan/{postinganDonasiId}",
    config: {
      payload: {
        output: "stream",
        parse: true,
        allow: ["application/json", "multipart/form-data", "image/jpeg"],
        maxBytes: 2 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: editPostinganDonasiByIdHandler,
  },
  {
    method: "DELETE",
    path: "/donasi/postingan/{postinganDonasiId}",
    handler: deletePostinganDonasiByIdHandler,
  },
  {
    method: "POST",
    path: "/donasi/pendaftaran",
    config: {
      payload: {
        output: "stream",
        parse: true,
        allow: ["application/json", "multipart/form-data", "image/jpeg"],
        maxBytes: 2 * 1000 * 1000,
        multipart: true,
      },
    },
    handler: addPendaftaranDonasiHandler,
  },
  {
    method: "GET",
    path: "/donasi/pendaftaran",
    handler: getAllPendaftaranDonasiHandler,
  },
];

module.exports = routes;
