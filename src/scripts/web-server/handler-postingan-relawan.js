// eslint-disable-next-line no-unused-vars
const { response } = require('@hapi/hapi/lib/validation');
const { nanoid } = require('nanoid');
const fs = require('fs');
const {
  addPostinganRelawanToDatabase,
  getAllPostinganRelawanFromDatabase,
  getPostinganRelawanIdFromDatabase,
  editPostinganRelawanFromDatabase,
  editPostinganRelawanWithoutPosterFromDatabase,
  deletePostinganRelawanIdFromDatabase,
} = require('../database/database-request-postingan-relawan');

const addPostinganRelawanHandler = async (request, h) => {
  const {
    usernamePembuat,
    judulPostingan,
    poster,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    jumlahRelawan,
    penanggungJawab,
    noTelepon,
    pekerjaan,
    persyaratan,
  } = request.payload;

  const namaPoster = poster.hapi.filename;

  if (usernamePembuat === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Username tidak ditemukan',
    });
    response.code(400);
    return response;
  }

  if (judulPostingan === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi judul postingan',
    });
    response.code(400);
    return response;
  }

  if (poster === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon masukkan poster',
    });
    response.code(400);
    return response;
  }

  if (tanggalMulai === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi tanggal dimulainya kegiatan relawan',
    });
    response.code(400);
    return response;
  }

  if (tanggalBerakhir === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi tanggal berakhirnya kegiatan relawan',
    });
    response.code(400);
    return response;
  }

  if (kabKota === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi Kabupaten/Kota lokasi kegiatan relawan',
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

  if (alamatLengkap === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi alamat lengkap kegiatan relawan',
    });
    response.code(400);
    return response;
  }

  if (jumlahRelawan === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi jumlah relawan yang dibutuhkan',
    });
    response.code(400);
    return response;
  }

  if (penanggungJawab === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi nama penanggung jawab',
    });
    response.code(400);
    return response;
  }

  if (noTelepon === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi no telepon penanggung jawab',
    });
    response.code(400);
    return response;
  }

  if (pekerjaan === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi pekerjaan penanggung jawab',
    });
    response.code(400);
    return response;
  }

  if (persyaratan === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi persyaratan kegiatan relawan',
    });
    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const insertedAt = new Date().toISOString().split('T')[0];
  const updatedAt = insertedAt;

  const data = {
    id,
    usernamePembuat,
    judulPostingan,
    namaPoster,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    jumlahRelawan,
    penanggungJawab,
    noTelepon,
    pekerjaan,
    persyaratan,
    insertedAt,
    updatedAt,
  };

  const dataPoster = poster._data;
  fs.writeFile(`src/public/upload/relawan/${namaPoster}`, dataPoster, (err) => {
    if (err) { console.log(err); } else {
      console.log('File berhasil disimpan');
    }
  });

  const results = await addPostinganRelawanToDatabase(data);

  if (results) {
    const response = h.response({
      status: 'success',
      message: 'Data berhasil ditambahkan',
      data: {
        postinganRelawanId: id,
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

const getAllPostinganRelawanHandler = async (request, h) => {
  const results = await getAllPostinganRelawanFromDatabase();

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
    poster,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    jumlahRelawan,
    penanggungJawab,
    noTelepon,
    pekerjaan,
    persyaratan,
  } = request.payload;

  const namaPoster = poster.hapi.filename;

  if (judulPostingan === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi judul postingan',
    });
    response.code(400);
    return response;
  }

  if (namaPoster === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon masukkan poster',
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

  if (jumlahRelawan === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi jumlah relawan yang dibutuhkan',
    });
    response.code(400);
    return response;
  }

  if (penanggungJawab === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi nama penanggung jawab',
    });
    response.code(400);
    return response;
  }

  if (noTelepon === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi no telepon penanggung jawab',
    });
    response.code(400);
    return response;
  }

  if (pekerjaan === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi pekerjaan penanggung jawab',
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

  const updatedAt = new Date().toISOString().split('T')[0];

  const data = {
    id: postinganRelawanId,
    judulPostingan,
    namaPoster,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    jumlahRelawan,
    penanggungJawab,
    noTelepon,
    pekerjaan,
    persyaratan,
    updatedAt,
  };

  const cekId = await getPostinganRelawanIdFromDatabase(postinganRelawanId);

  if (cekId.length === 1) {
    await editPostinganRelawanFromDatabase(data);

    const dataPoster = poster._data;
    fs.writeFile(`src/public/upload/relawan/${namaPoster}`, dataPoster, (err) => {
      if (err) { console.log(err); } else {
        console.log('File berhasil disimpan');
      }
    });

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

const editPostinganRelawanWithoutPosterByIdHandler = async (request, h) => {
  const { postinganRelawanId } = request.params;

  const {
    judulPostingan,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    jumlahRelawan,
    penanggungJawab,
    noTelepon,
    pekerjaan,
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

  if (jumlahRelawan === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi jumlah relawan yang dibutuhkan',
    });
    response.code(400);
    return response;
  }

  if (penanggungJawab === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi nama penanggung jawab',
    });
    response.code(400);
    return response;
  }

  if (noTelepon === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi no telepon penanggung jawab',
    });
    response.code(400);
    return response;
  }

  if (pekerjaan === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi pekerjaan penanggung jawab',
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

  const updatedAt = new Date().toISOString().split('T')[0];

  const data = {
    id: postinganRelawanId,
    judulPostingan,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    jumlahRelawan,
    penanggungJawab,
    noTelepon,
    pekerjaan,
    persyaratan,
    updatedAt,
  };

  const cekId = await getPostinganRelawanIdFromDatabase(postinganRelawanId);

  if (cekId.length === 1) {
    await editPostinganRelawanWithoutPosterFromDatabase(data);

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
  console.log(cekId);

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
  addPostinganRelawanHandler,
  getAllPostinganRelawanHandler,
  getPostinganRelawanByIdHandler,
  editPostinganRelawanByIdHandler,
  editPostinganRelawanWithoutPosterByIdHandler,
  deletePostinganRelawanByIdHandler,
};
