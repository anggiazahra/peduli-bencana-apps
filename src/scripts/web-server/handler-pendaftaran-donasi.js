/* eslint-disable operator-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
const { response } = require("@hapi/hapi/lib/validation");
const { nanoid } = require("nanoid");
const {
  getAllPendaftaranDonasiFromDatabase,
  getPostinganDonasiIdFromDatabase,
  editPostinganDonasiFromDatabase,
  deletePostinganDonasiIdFromDatabase,
} = require("../database/database-request");

const addPendaftaranDonasiHandler = async (request, h) => {
  const { nominal, namaLengkap, noTelepon, kabKota, provinsi } =
    request.payload;

  if (nominal === undefined) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan data. Mohon isi nominal donasi",
    });
    response.code(400);
    return response;
  }

  if (namaLengkap === undefined) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan data. Mohon isi nama lengkap anda",
    });
    response.code(400);
    return response;
  }

  if (noTelepon === undefined) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan data. Mohon isi no telepon anda",
    });
    response.code(400);
    return response;
  }

  if (kabKota === undefined) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan data. Mohon isi Kabupaten/Kota anda",
    });
    response.code(400);
    return response;
  }

  if (provinsi === undefined) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal menambahkan data. Mohon isi Provinsi lokasi kegiatan donasi",
    });
    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const tanggalDaftar = new Date().toLocaleDateString();

  const data = {
    id,
    nominal,
    namaLengkap,
    noTelepon,
    kabKota,
    provinsi,
    tanggalDaftar,
  };

  const results = await addPendaftaranDonasiToDatabase(data);

  if (results) {
    const response = h.response({
      status: "success",
      message: "Data berhasil ditambahkan",
      data: {
        pendaftaranDonasiId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: "error",
    message: "Data gagal ditambahkan",
  });
  response.code(500);
  return response;
};

const getAllPendaftaranDonasiHandler = async (request, h) => {
  const results = await getAllPendaftaranDonasiFromDatabase();

  const response = h.response({
    status: "success",
    data: {
      donasi: results,
    },
  });
  response.code(200);
  return response;
};

const getPostinganDonasiByIdHandler = async (request, h) => {
  const { postinganDonasinId } = request.params;

  const results = await getPostinganDonasiIdFromDatabase(postinganDonasiId);

  if (results.length > 0) {
    const response = h.response({
      status: "success",
      data: {
        donasi: results,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Data tidak ditemukan",
  });
  response.code(404);
  return response;
};

const editPostinganDonasiByIdHandler = async (request, h) => {
  const { postinganDonasiId } = request.params;

  const {
    judulPostingan,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    keterangan,
  } = request.payload;

  if (judulPostingan === undefined) {
    const response = h.response({
      status: "fail",
      message: "Gagal memperbaharui data. Mohon isi judul postingan",
    });
    response.code(400);
    return response;
  }

  if (tanggalMulai === undefined) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal memperbaharui data. Mohon isi tanggal dimulainya kegiatan donasi",
    });
    response.code(400);
    return response;
  }

  if (tanggalBerakhir === undefined) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal memperbaharui data. Mohon isi tanggal berakhirnya kegiatan donasi",
    });
    response.code(400);
    return response;
  }

  if (kabKota === undefined) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal memperbaharui data. Mohon isi Kabupaten/Kota lokasi kegiatan donasi",
    });
    response.code(400);
    return response;
  }

  if (provinsi === undefined) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal memperbaharui data. Mohon isi Provinsi lokasi kegiatan donasi",
    });
    response.code(400);
    return response;
  }

  if (alamatLengkap === undefined) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal memperbaharui data. Mohon isi alamat lengkap kegiatan donasi",
    });
    response.code(400);
    return response;
  }

  if (persyaratan === undefined) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal memperbaharui data. Mohon isi persyaratan kegiatan donasi",
    });
    response.code(400);
    return response;
  }

  const updatedAt = new Date().toISOString();

  const data = {
    id: postinganDonasiId,
    judulPostingan,
    tanggalMulai,
    tanggalBerakhir,
    kabKota,
    provinsi,
    alamatLengkap,
    keterangan,
    updatedAt,
  };

  const cekId = await getPostinganDonasiIdFromDatabase(postinganDonasiId);

  if (cekId.length === 1) {
    await editPostinganDonasiFromDatabase(data);

    const response = h.response({
      status: "success",
      message: "Data berhasil diperbarui",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Gagal memperbarui data. Id tidak ditemukan",
  });
  response.code(404);
  return response;
};

const deletePostinganDonasiByIdHandler = async (request, h) => {
  const { postinganDonasiId } = request.params;

  const cekId = await getPostinganDonasiIdFromDatabase(postinganDonasiId);

  if (cekId.length === 1) {
    await deletePostinganDonasiIdFromDatabase(postinganDonasiId);
    const response = h.response({
      status: "success",
      message: "Data berhasil dihapus",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Data gagal dihapus. Id tidak ditemukan",
  });
  response.code(404);
  return response;
};

module.exports = {
  addPendaftaranDonasiHandler,
  getAllPendaftaranDonasiHandler,
  getPostinganDonasiByIdHandler,
  editPostinganDonasiByIdHandler,
  deletePostinganDonasiByIdHandler,
};
