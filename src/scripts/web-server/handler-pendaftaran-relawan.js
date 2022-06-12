// eslint-disable-next-line no-unused-vars
const { response } = require('@hapi/hapi/lib/validation');
const { nanoid } = require('nanoid');
const {
  getPostinganRelawanIdFromDatabase,
} = require('../database/database-request-postingan-relawan');

const {
  addPendaftaranRelawanToDatabase,
  getAllPendaftaranRelawanFromDatabase,
} = require('../database/database-request-daftar-relawan');

const addPendaftaranRelawanHandler = async (request, h) => {
  const {
    idPostinganRelawan,
    namaLengkap,
    noTelepon,
    kabKota,
    provinsi,
  } = request.payload;

  if (idPostinganRelawan === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Id postingan relawan tidak ada',
    });
    response.code(400);
    return response;
  }

  if (namaLengkap === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi nama lengkap anda',
    });
    response.code(400);
    return response;
  }

  if (noTelepon === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi no telepon anda',
    });
    response.code(400);
    return response;
  }

  if (kabKota === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi Kabupaten/Kota anda',
    });
    response.code(400);
    return response;
  }

  if (provinsi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi Provinsi lokasi kegiatan relawan',
    });
    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const tanggalDaftar = new Date().toLocaleDateString();

  const data = {
    id,
    idPostinganRelawan,
    namaLengkap,
    noTelepon,
    kabKota,
    provinsi,
    tanggalDaftar,
  };
  const cekId = await getPostinganRelawanIdFromDatabase(idPostinganRelawan);
  const results = await addPendaftaranRelawanToDatabase(data);
  console.log(results);

  if (cekId.length > 0 && results) {
    const response = h.response({
      status: 'success',
      message: 'Data berhasil ditambahkan',
      data: {
        idPendaftaranRelawan: id,
        idPostinganRelawan,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Data gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getAllPendaftaranRelawanHandler = async (request, h) => {
  const results = await getAllPendaftaranRelawanFromDatabase();

  const response = h.response({
    status: 'success',
    data: {
      relawan: results,
    },
  });
  response.code(200);
  return response;
};

module.exports = {
  addPendaftaranRelawanHandler,
  getAllPendaftaranRelawanHandler,
};
