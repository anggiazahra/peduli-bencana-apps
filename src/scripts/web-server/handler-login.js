// eslint-disable-next-line no-unused-vars
const { response } = require('@hapi/hapi/lib/validation');
const SHA256 = require('crypto-js/sha256');
const {
  getRegistrasiFromDatabaseByUsername,
} = require('../database/database-request-registrasi');

const checkLoginHandler = async (request, h) => {
  const {
    username,
    password,
  } = request.payload;

  if (username === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal melakukan login. Mohon isi username',
    });
    response.code(400);
    return response;
  }

  if (password === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal melakukan login. Mohon isi password',
    });
    response.code(400);
    return response;
  }

  const checkUsername = await getRegistrasiFromDatabaseByUsername(username);
  const dataRegistrasi = checkUsername[0];
  const passwordHash = SHA256(password).toString();

  if (checkUsername.length < 1) {
    const response = h.response({
      status: 'error',
      message: 'Gagal login, username tidak ditemukan',
    });
    response.code(500);
    return response;
  }

  if (dataRegistrasi.password !== passwordHash) {
    const response = h.response({
      status: 'error',
      message: 'Gagal login, password yang anda masukkan salah',
    });
    response.code(500);
    return response;
  }

  if (dataRegistrasi.username === username && dataRegistrasi.password === passwordHash) {
    const response = h.response({
      status: 'success',
      message: 'Berhasil Login',
      data: {
        username,
        hakAkses: dataRegistrasi.hakAkses,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Gagal Login',
  });
  response.code(500);
  return response;
};

module.exports = {
  checkLoginHandler,
};
