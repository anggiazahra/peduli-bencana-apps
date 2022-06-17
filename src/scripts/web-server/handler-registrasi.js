// eslint-disable-next-line no-unused-vars
const { response } = require('@hapi/hapi/lib/validation');
const SHA256 = require('crypto-js/sha256');
const {
  addRegistrasiToDatabase,
  getAllRegistrasiFromDatabase,
  getRegistrasiFromDatabaseByUsername,
} = require('../database/database-request-registrasi');

const addRegistrasiHandler = async (request, h) => {
  const {
    namaDepan,
    namaBelakang,
    username,
    password,
    passwordKonfirmasi,
  } = request.payload;

  if (namaDepan === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi data nama depan',
    });
    response.code(400);
    return response;
  }

  if (namaBelakang === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi data nama belakang',
    });
    response.code(400);
    return response;
  }

  if (username === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi data username',
    });
    response.code(400);
    return response;
  }

  if (password === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi data password',
    });
    response.code(400);
    return response;
  }

  if (passwordKonfirmasi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi data password konfirmasi',
    });
    response.code(400);
    return response;
  }

  const tanggalDaftar = new Date().toISOString().split('T')[0];
  const newPassword = SHA256(password);
  const newPasswordKonfirmasi = SHA256(passwordKonfirmasi);

  const data = {
    namaDepan,
    namaBelakang,
    username,
    newPassword,
    newPasswordKonfirmasi,
    hakAkses: 'pengguna',
    tanggalDaftar,
  };

  const cekUsername = await getRegistrasiFromDatabaseByUsername(username);

  if (cekUsername.length > 0) {
    const response = h.response({
      status: 'error',
      message: 'Username sudah digunakan, silahkan masukkan username lain',
      data: {
        username,
      },
    });
    response.code(500);
    return response;
  }

  if (cekUsername.length < 1) {
    await addRegistrasiToDatabase(data);
    const response = h.response({
      status: 'success',
      message: 'Data berhasil ditambahkan',
      data: {
        username,
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

const getAllRegistrasiHandler = async (request, h) => {
  const results = await getAllRegistrasiFromDatabase();

  const response = h.response({
    status: 'success',
    data: {
      registrasi: results,
    },
  });
  response.code(200);
  return response;
};

module.exports = {
  addRegistrasiHandler,
  getAllRegistrasiHandler,
};
