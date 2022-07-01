/* eslint-disable no-unused-vars */
const { response } = require('@hapi/hapi/lib/validation');
const { nanoid } = require('nanoid');
const fs = require('fs');
const {
  addPostinganArtikelToDatabase,
  getAllPostinganArtikelFromDatabase,
  getPostinganArtikelIdFromDatabase,
  editPostinganArtikelFromDatabase,
  editPostinganArtikelWithoutgambarArtikelFromDatabase,
  deletePostinganArtikelIdFromDatabase,
} = require('../database/database-request-artikel');

const addPostinganArtikelHandler = async (request, h) => {
  const {
    judul,
    gambarArtikel,
    isiArtikel,
    sumber,
  } = request.payload;

  const namaGambar = gambarArtikel.hapi.filename;

  if (judul === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi judul postingan',
    });
    response.code(400);
    return response;
  }

  if (gambarArtikel === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon masukkan gambarArtikel',
    });
    response.code(400);
    return response;
  }

  if (isiArtikel === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi artikel',
    });
    response.code(400);
    return response;
  }

  if (sumber === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi sumber artikel',
    });
    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const insertedAt = new Date().toISOString().split('T')[0];
  const updatedAt = insertedAt;

  const data = {
    id,
    judul,
    namaGambar,
    isiArtikel,
    sumber,
    insertedAt,
    updatedAt,
  };

  const dataGambar = gambarArtikel._data;
  fs.writeFile(`src/public/upload/artikel/${namaGambar}`, dataGambar, (err) => {
    if (err) { console.log(err); } else {
      console.log('File berhasil disimpan');
    }
  });

  const results = await addPostinganArtikelToDatabase(data);

  if (results) {
    const response = h.response({
      status: 'success',
      message: 'Postingan artikel berhasil ditambahkan',
      data: {
        idPostinganArtikel: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Postingan artikel gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getAllPostinganArtikelHandler = async (request, h) => {
  const results = await getAllPostinganArtikelFromDatabase();

  const response = h.response({
    status: 'success',
    data: {
      artikel: results,
    },
  });
  response.code(200);
  return response;
};

const getPostinganArtikelByIdHandler = async (request, h) => {
  const { postinganArtikelId } = request.params;

  const results = await getPostinganArtikelIdFromDatabase(postinganArtikelId);

  if (results.length > 0) {
    const response = h.response({
      status: 'success',
      data: {
        artikel: results,
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

const editPostinganArtikelByIdHandler = async (request, h) => {
  const { postinganArtikelId } = request.params;

  const {
    judul,
    gambarArtikel,
    isiArtikel,
    sumber,
  } = request.payload;

  const namaGambar = gambarArtikel.hapi.filename;

  if (judul === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi judul postingan',
    });
    response.code(400);
    return response;
  }

  if (namaGambar === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon masukkan gambarArtikel',
    });
    response.code(400);
    return response;
  }

  if (isiArtikel === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi artikel',
    });
    response.code(400);
    return response;
  }

  if (sumber === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi sumber kegiatan artikel',
    });
    response.code(400);
    return response;
  }

  const updatedAt = new Date().toISOString().split('T')[0];

  const data = {
    id: postinganArtikelId,
    judul,
    namaGambar,
    isiArtikel,
    sumber,
    updatedAt,
  };

  const cekId = await getPostinganArtikelIdFromDatabase(postinganArtikelId);

  if (cekId.length === 1) {
    await editPostinganArtikelFromDatabase(data);

    const dataGambar = gambarArtikel._data;
    fs.writeFile(`src/public/upload/artikel/${namaGambar}`, dataGambar, (err) => {
      if (err) { console.log(err); } else {
        console.log('File berhasil disimpan');
      }
    });

    const response = h.response({
      status: 'success',
      message: 'Postingan artikel berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Gagal memperbarui postingan. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const editPostinganArtikelWithoutgambarArtikelByIdHandler = async (request, h) => {
  const { postinganArtikelId } = request.params;

  const {
    judul,
    sumber,
    isiArtikel,
  } = request.payload;

  if (judul === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi judul postingan',
    });
    response.code(400);
    return response;
  }

  if (sumber === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi sumber artikel',
    });
    response.code(400);
    return response;
  }

  if (isiArtikel === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi Artikel',
    });
    response.code(400);
    return response;
  }

  const updatedAt = new Date().toISOString().split('T')[0];

  const data = {
    id: postinganArtikelId,
    judul,
    sumber,
    isiArtikel,
    updatedAt,
  };

  const cekId = await getPostinganArtikelIdFromDatabase(postinganArtikelId);

  if (cekId.length === 1) {
    await editPostinganArtikelWithoutgambarArtikelFromDatabase(data);

    const response = h.response({
      status: 'success',
      message: 'Postingan artikel berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Gagal memperbarui postingan. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const deletePostinganArtikelByIdHandler = async (request, h) => {
  const { postinganArtikelId } = request.params;

  const cekId = await getPostinganArtikelIdFromDatabase(postinganArtikelId);

  if (cekId.length === 1) {
    await deletePostinganArtikelIdFromDatabase(postinganArtikelId);
    const response = h.response({
      status: 'success',
      message: 'Postingan artikel berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Postingan artikel gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  addPostinganArtikelHandler,
  getAllPostinganArtikelHandler,
  getPostinganArtikelByIdHandler,
  editPostinganArtikelByIdHandler,
  editPostinganArtikelWithoutgambarArtikelByIdHandler,
  deletePostinganArtikelByIdHandler,
};
