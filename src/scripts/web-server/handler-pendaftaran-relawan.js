// eslint-disable-next-line no-unused-vars
const { response } = require('@hapi/hapi/lib/validation');
const { nanoid } = require('nanoid');
const {
  addPendaftaranRelawanToDatabase,
  getAllPendaftaranRelawanFromDatabase,
  getPostinganRelawanIdFromDatabase,
  editPostinganRelawanFromDatabase,
  deletePostinganRelawanIdFromDatabase,
} = require('../database/database-request');

const addPendaftaranRelawanHandler = async (request, h) => {
  const {
    namaLengkap,
    noTelepon,
    kabKota,
    provinsi,
  } = request.payload;

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
    namaLengkap,
    noTelepon,
    kabKota,
    provinsi,
    tanggalDaftar,
  };

  const results = await addPendaftaranRelawanToDatabase(data);

  if (results) {
    const response = h.response({
      status: 'success',
      message: 'Data berhasil ditambahkan',
      data: {
        pendaftaranRelawanId: id,
      },
    });
    response.code(201);
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

const getPostinganRelawanByIdHandler = async (request, h) => {
  const { postinganRelawanId } = request.params;

  const results = await getPostinganRelawanIdFromDatabase(postinganRelawanId);

  if (results.length > 0) {
    const response = h.response({
      status: 'success',
      data: {
        relawan: results,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Data tidak ditemukan',
  });
  response.code(404);
  return response;
};

const editPostinganRelawanByIdHandler = async (request, h) => {
  const { postinganRelawanId } = request.params;

  const {
    judulPostingan,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    persyaratan,
  } = request.payload;

  if (judulPostingan === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi judul postingan',
    });
    response.code(400);
    return response;
  }

  if (tanggalMulai === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi tanggal dimulainya kegiatan relawan',
    });
    response.code(400);
    return response;
  }

  if (tanggalBerakhir === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi tanggal berakhirnya kegiatan relawan',
    });
    response.code(400);
    return response;
  }

  if (kabKota === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi Kabupaten/Kota lokasi kegiatan relawan',
    });
    response.code(400);
    return response;
  }

  if (provinsi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi Provinsi lokasi kegiatan relawan',
    });
    response.code(400);
    return response;
  }

  if (alamatLengkap === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi alamat lengkap kegiatan relawan',
    });
    response.code(400);
    return response;
  }

  if (persyaratan === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi persyaratan kegiatan relawan',
    });
    response.code(400);
    return response;
  }

  const updatedAt = new Date().toISOString();

  const data = {
    id: postinganRelawanId,
    judulPostingan,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    persyaratan,
    updatedAt,
  };

  const cekId = await getPostinganRelawanIdFromDatabase(postinganRelawanId);

  if (cekId.length === 1) {
    await editPostinganRelawanFromDatabase(data);

    const response = h.response({
      status: 'success',
      message: 'Data berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui data. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const deletePostinganRelawanByIdHandler = async (request, h) => {
  const { postinganRelawanId } = request.params;

  const cekId = await getPostinganRelawanIdFromDatabase(postinganRelawanId);

  if (cekId.length === 1) {
    await deletePostinganRelawanIdFromDatabase(postinganRelawanId);
    const response = h.response({
      status: 'success',
      message: 'Data berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Data gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  addPendaftaranRelawanHandler,
  getAllPendaftaranRelawanHandler,
  getPostinganRelawanByIdHandler,
  editPostinganRelawanByIdHandler,
  deletePostinganRelawanByIdHandler,
};
