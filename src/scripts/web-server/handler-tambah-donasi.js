// eslint-disable-next-line no-unused-vars
const { response } = require('@hapi/hapi/lib/validation');
const { nanoid } = require('nanoid');
const fs = require('fs');
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
    username,
    namaDonatur,
    namaBank,
    noRekening,
    atasNama,
    jumlahDonasi,
    buktiPembayaran,
  } = request.payload;

  const namaBuktiPembayaran = buktiPembayaran.hapi.filename;

  if (idPostinganDonasi === undefined) {
    const response = h.response({
      status: 'error',
      message: 'Gagal menambahkan data. Id postingan donasi tidak diketahui',
    });
    response.code(400);
    return response;
  }

  if (username === undefined) {
    const response = h.response({
      status: 'error',
      message: 'Gagal menambahkan data. Username tidak diketahui',
    });
    response.code(400);
    return response;
  }

  if (namaDonatur === undefined) {
    const response = h.response({
      status: 'error',
      message: 'Gagal menambahkan data. Mohon isi nama donatur',
    });
    response.code(400);
    return response;
  }

  if (namaBank === undefined) {
    const response = h.response({
      status: 'error',
      message: 'Gagal menambahkan data. Mohon isi nama bank',
    });
    response.code(400);
    return response;
  }

  if (noRekening === undefined) {
    const response = h.response({
      status: 'error',
      message: 'Gagal menambahkan data. Mohon isi no rekening anda',
    });
    response.code(400);
    return response;
  }

  if (atasNama === undefined) {
    const response = h.response({
      status: 'error',
      message: 'Gagal menambahkan data. Mohon isi atas nama rekening anda',
    });
    response.code(400);
    return response;
  }

  if (jumlahDonasi === undefined) {
    const response = h.response({
      status: 'error',
      message: 'Gagal menambahkan data. Mohon isi jumlah donasi',
    });
    response.code(400);
    return response;
  }

  if (buktiPembayaran === undefined) {
    const response = h.response({
      status: 'error',
      message: 'Gagal menambahkan data. Mohon masukkan bukti pembayaran',
    });
    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const tanggalDonasi = new Date().toISOString().split('T')[0];

  const data = {
    id,
    idPostinganDonasi,
    username,
    namaDonatur,
    namaBank,
    noRekening,
    atasNama,
    jumlahDonasi,
    buktiPembayaran: namaBuktiPembayaran,
    tanggalDonasi,
    status: 'Belum Dikonfirmasi',
  };

  const dataBuktiPembayaran = buktiPembayaran._data;
  fs.writeFile(`src/public/upload/bukti-pembayaran/${namaBuktiPembayaran}`, dataBuktiPembayaran, (err) => {
    if (err) { console.log(err); } else {
      console.log('File berhasil disimpan');
    }
  });

  const cekId = await getPostinganDonasiIdFromDatabase(idPostinganDonasi);

  if (cekId.length > 0) {
    await addTambahDonasiToDatabase(data);
    const response = h.response({
      status: 'success',
      message: 'Donasi berhasil ditambahkan',
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
    message: 'Donasi gagal ditambahkan',
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

  const cekId = await getTambahDonasiIdFromDatabase(donasiTambahId);
  const cekStatus = cekId[0].status;

  if (cekId.length > 0 && cekStatus === 'Belum Dikonfirmasi') {
    const data = {
      id: donasiTambahId,
      status: 'Sudah Dikonfirmasi',
    };
    await editTambahDonasiFromDatabase(data);
    const response = h.response({
      status: 'success',
      message: 'Donasi berhasil dikonfirmasi',
      data: {
        id: donasiTambahId,
        status: 'Sudah Dikonfirmasi',
      },
    });
    response.code(200);
    return response;
  }

  if (cekId.length > 0 && cekStatus === 'Sudah Dikonfirmasi') {
    const data = {
      id: donasiTambahId,
      status: 'Belum Dikonfirmasi',
    };
    await editTambahDonasiFromDatabase(data);
    const response = h.response({
      status: 'success',
      message: 'Konfirmasi donasi berhasil dibatalkan',
      data: {
        id: donasiTambahId,
        status: 'Belum Dikonfirmasi',
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
