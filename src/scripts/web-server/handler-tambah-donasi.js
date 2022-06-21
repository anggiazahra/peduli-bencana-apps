// eslint-disable-next-line no-unused-vars
const { response } = require('@hapi/hapi/lib/validation');
const { nanoid } = require('nanoid');
const {
  addTambahDonasiToDatabase,
  getAllTambahDonasiFromDatabase,
  getTambahDonasiIdFromDatabase,
  editTambahDonasiFromDatabase,
} = require('../database/database-request-tambah-donasi');

const {
  getPostinganDonasiIdFromDatabase,
} = require('../database/database-request-postingan-donasi');

const addTambahDonasiHandler = async (request, h) => {
  const {
    idPostinganDonasi,
    namaDonatur,
    namaBank,
    noRekening,
    atasNama,
    jumlahDonasi,
  } = request.payload;

  if (idPostinganDonasi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Id postingan donasi tidak diketahui',
    });
    response.code(400);
    return response;
  }

  if (namaDonatur === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi nama donatur',
    });
    response.code(400);
    return response;
  }

  if (namaBank === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi nama bank',
    });
    response.code(400);
    return response;
  }

  if (noRekening === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi no rekening anda',
    });
    response.code(400);
    return response;
  }

  if (atasNama === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi atas nama rekening anda',
    });
    response.code(400);
    return response;
  }

  if (jumlahDonasi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi jumlah donasi',
    });
    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const tanggalDonasi = new Date().toISOString().split('T')[0];

  const data = {
    id,
    idPostinganDonasi,
    namaDonatur,
    namaBank,
    noRekening,
    atasNama,
    jumlahDonasi,
    tanggalDonasi,
    status: 'Belum Dikonfirmasi',
  };
  const cekId = await getPostinganDonasiIdFromDatabase(idPostinganDonasi);

  if (cekId.length > 0) {
    await addTambahDonasiToDatabase(data);
    const response = h.response({
      status: 'success',
      message: 'Data berhasil ditambahkan',
      data: {
        idTambahDonasi: id,
        idPostinganDonasi,
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

const getAllTambahDonasiHandler = async (request, h) => {
  const results = await getAllTambahDonasiFromDatabase();

  const response = h.response({
    status: 'success',
    data: {
      donasi: results,
    },
  });
  response.code(200);
  return response;
};

const putTambahDonasiHandler = async (request, h) => {
  const { donasiTambahId } = request.params;

  const data = {
    id: donasiTambahId,
    status: 'Sudah Dikonfirmasi',
  };
  const cekId = await getTambahDonasiIdFromDatabase(donasiTambahId);

  if (cekId.length > 0) {
    await editTambahDonasiFromDatabase(data);
    const response = h.response({
      status: 'success',
      message: 'Donasi berhasil dikonfirmasi',
      data: {
        donasiTambahId,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Donasi gagal dikonfirmasi',
  });
  response.code(500);
  return response;
};

module.exports = {
  addTambahDonasiHandler,
  getAllTambahDonasiHandler,
  putTambahDonasiHandler,
};
