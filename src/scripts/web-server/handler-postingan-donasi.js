// eslint-disable-next-line no-unused-vars
const { response } = require('@hapi/hapi/lib/validation');
const { nanoid } = require('nanoid');
const fs = require('fs');
const {
  addPostinganDonasiToDatabase,
  getAllPostinganDonasiFromDatabase,
  getPostinganDonasiIdFromDatabase,
  editPostinganDonasiFromDatabase,
  editPostinganDonasiWithoutPosterFromDatabase,
  deletePostinganDonasiIdFromDatabase,
} = require('../database/database-request-postingan-donasi');

const addPostinganDonasiHandler = async (request, h) => {
  const {
    judulPostingan,
    poster,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    penanggungJawab,
    noTelepon,
    pekerjaan,
    namaBank,
    noRekening,
    targetDonasi,
    deskripsiDonasi,
  } = request.payload;

  const namaPoster = poster.hapi.filename;

  console.log(request.payload);

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
      message: 'Gagal menambahkan data. Mohon isi tanggal dimulainya periode donasi',
    });
    response.code(400);
    return response;
  }

  if (tanggalBerakhir === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi tanggal berakhirnya periode donasi',
    });
    response.code(400);
    return response;
  }

  if (kabKota === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi Kabupaten/Kota lokasi terjadinya bencana',
    });
    response.code(400);
    return response;
  }

  if (provinsi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi Provinsi lokasi terjadinya bencana',
    });
    response.code(400);
    return response;
  }

  if (alamatLengkap === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi alamat lengkap lokasi terjadinya bencana',
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

  if (namaBank === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi nama bank yang digunakan',
    });
    response.code(400);
    return response;
  }

  if (noRekening === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi no rekening yang digunakan',
    });
    response.code(400);
    return response;
  }

  if (targetDonasi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi target yang ingin dicapai untuk donasi',
    });
    response.code(400);
    return response;
  }

  if (deskripsiDonasi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi deskripsi dari donasi',
    });
    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const insertedAt = new Date().toLocaleDateString();
  const updatedAt = insertedAt;

  const data = {
    id,
    judulPostingan,
    namaPoster,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    penanggungJawab,
    noTelepon,
    pekerjaan,
    namaBank,
    noRekening,
    targetDonasi,
    deskripsiDonasi,
    insertedAt,
    updatedAt,
  };

  const dataPoster = poster._data;
  fs.writeFile(`src/public/upload/donasi/${namaPoster}`, dataPoster, (err) => {
    if (err) { console.log(err); } else {
      console.log('File berhasil disimpan');
    }
  });

  const results = await addPostinganDonasiToDatabase(data);

  if (results) {
    const response = h.response({
      status: 'success',
      message: 'Data berhasil ditambahkan',
      data: {
        idPostinganDonasi: id,
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

const getAllPostinganDonasiHandler = async (request, h) => {
  const results = await getAllPostinganDonasiFromDatabase();

  const response = h.response({
    status: 'success',
    data: {
      donasi: results,
    },
  });
  response.code(200);
  return response;
};

const getPostinganDonasiByIdHandler = async (request, h) => {
  const { postinganDonasiId } = request.params;

  const results = await getPostinganDonasiIdFromDatabase(postinganDonasiId);

  if (results.length > 0) {
    const response = h.response({
      status: 'success',
      data: {
        donasi: results,
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

const editPostinganDonasiByIdHandler = async (request, h) => {
  const { postinganDonasiId } = request.params;

  const {
    judulPostingan,
    poster,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    penanggungJawab,
    noTelepon,
    pekerjaan,
    namaBank,
    noRekening,
    targetDonasi,
    deskripsiDonasi,
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
      message: 'Gagal memperbaharui data. Mohon isi tanggal dimulainya periode donasi',
    });
    response.code(400);
    return response;
  }

  if (tanggalBerakhir === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi tanggal berakhirnya periode donasi',
    });
    response.code(400);
    return response;
  }

  if (kabKota === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi Kabupaten/Kota lokasi terjadinya bencana',
    });
    response.code(400);
    return response;
  }

  if (provinsi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi Provinsi lokasi terjadinya bencana',
    });
    response.code(400);
    return response;
  }

  if (alamatLengkap === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi alamat lengkap terjadinya bencana',
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

  if (namaBank === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi nama bank yang digunakan',
    });
    response.code(400);
    return response;
  }

  if (noRekening === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi no rekening yang digunakan',
    });
    response.code(400);
    return response;
  }

  if (targetDonasi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi target yang ingin dicapai untuk donasi',
    });
    response.code(400);
    return response;
  }

  if (deskripsiDonasi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi deskripsi dari donasi',
    });
    response.code(400);
    return response;
  }

  const updatedAt = new Date().toLocaleDateString();

  const data = {
    id: postinganDonasiId,
    judulPostingan,
    namaPoster,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    penanggungJawab,
    noTelepon,
    pekerjaan,
    namaBank,
    noRekening,
    targetDonasi,
    deskripsiDonasi,
    updatedAt,
  };

  const cekId = await getPostinganDonasiIdFromDatabase(postinganDonasiId);

  if (cekId.length === 1) {
    await editPostinganDonasiFromDatabase(data);

    const dataPoster = poster._data;
    fs.writeFile(`src/public/upload/donasi/${namaPoster}`, dataPoster, (err) => {
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

const editPostinganDonasiWithoutPosterByIdHandler = async (request, h) => {
  const { postinganDonasiId } = request.params;

  const {
    judulPostingan,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    penanggungJawab,
    noTelepon,
    pekerjaan,
    namaBank,
    noRekening,
    targetDonasi,
    deskripsiDonasi,
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
      message: 'Gagal memperbaharui data. Mohon isi tanggal dimulainya periode donasi',
    });
    response.code(400);
    return response;
  }

  if (tanggalBerakhir === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi tanggal berakhirnya periode donasi',
    });
    response.code(400);
    return response;
  }

  if (kabKota === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi Kabupaten/Kota lokasi terjadinya bencana',
    });
    response.code(400);
    return response;
  }

  if (provinsi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi Provinsi lokasi terjadinya bencana',
    });
    response.code(400);
    return response;
  }

  if (alamatLengkap === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi alamat lengkap terjadinya bencana',
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

  if (namaBank === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi nama bank yang digunakan',
    });
    response.code(400);
    return response;
  }

  if (noRekening === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi no rekening yang digunakan',
    });
    response.code(400);
    return response;
  }

  if (targetDonasi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi target yang ingin dicapai untuk donasi',
    });
    response.code(400);
    return response;
  }

  if (deskripsiDonasi === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbaharui data. Mohon isi deskripsi dari donasi',
    });
    response.code(400);
    return response;
  }

  const updatedAt = new Date().toLocaleDateString();

  const data = {
    id: postinganDonasiId,
    judulPostingan,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    penanggungJawab,
    noTelepon,
    pekerjaan,
    namaBank,
    noRekening,
    targetDonasi,
    deskripsiDonasi,
    updatedAt,
  };

  const cekId = await getPostinganDonasiIdFromDatabase(postinganDonasiId);

  if (cekId.length === 1) {
    await editPostinganDonasiWithoutPosterFromDatabase(data);

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

const deletePostinganDonasiByIdHandler = async (request, h) => {
  const { postinganDonasiId } = request.params;

  const cekId = await getPostinganDonasiIdFromDatabase(postinganDonasiId);
  console.log(cekId);

  if (cekId.length === 1) {
    await deletePostinganDonasiIdFromDatabase(postinganDonasiId);
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
  addPostinganDonasiHandler,
  getAllPostinganDonasiHandler,
  getPostinganDonasiByIdHandler,
  editPostinganDonasiByIdHandler,
  editPostinganDonasiWithoutPosterByIdHandler,
  deletePostinganDonasiByIdHandler,
};
