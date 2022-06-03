/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const { con } = require("./database-connection");

// Postingan Donasi
function addPostinganDonasiToDatabase(data) {
  const sql = `INSERT INTO postinganDonasi (id, judulPostingan, poster, tanggalMulai, tanggalBerakhir, kabKota, provinsi, alamatLengkap, keterangan, insertedAt, updatedAt) VALUES ('${data.id}', '${data.judulPostingan}', '${data.namaPoster}', '${data.tanggalMulai}', '${data.tanggalBerakhir}', '${data.kabKota}', '${data.provinsi}', '${data.alamatLengkap}', '${data.persyaratan}', '${data.insertedAt}', '${data.updatedAt}')`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getAllPostinganDonasiFromDatabase() {
  return new Promise((resolve, reject) => {
    con.query("SELECT * FROM postingandonasi", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getPostinganDonasiIdFromDatabase(id) {
  return new Promise((resolve, reject) => {
    con.query(
      `SELECT * FROM postingandonasi WHERE id = '${id}'`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
}

function editPostinganDonasiFromDatabase(data) {
  const sql = `UPDATE postingandonasi SET judulPostingan = '${data.judulPostingan}', poster = '${data.namaPoster}', tanggalMulai = '${data.tanggalMulai}', tanggalBerakhir = '${data.tanggalBerakhir}', kabKota = '${data.kabKota}', provinsi = '${data.provinsi}', alamatLengkap = '${data.alamatLengkap}', keterangan = '${data.keterangan}', updatedAt = '${data.updatedAt}' WHERE id = '${data.id}'`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function deletePostinganDonasiIdFromDonasi(id) {
  return new Promise((resolve, reject) => {
    con.query(
      `DELETE FROM postingandonasi WHERE id = '${id}'`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
}
// Postingan Donasi End

// Pendaftaran Donasi
function addPendaftaranDonasiToDatabase(data) {
  const sql = `INSERT INTO pendaftarandonasi (id, namaLengkap, noTelepon, kabKota, provinsi, tanggalDaftar) VALUES ('${data.id}', '${data.namaLengkap}', '${data.noTelepon}', '${data.kabKota}', '${data.provinsi}', '${data.tanggalDaftar}')`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getAllPendaftaranDonasiFromDatabase() {
  return new Promise((resolve, reject) => {
    con.query("SELECT * FROM pendaftarandonasi", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

module.exports = {
  addPostinganDonasiToDatabase,
  getAllPostinganDonasiFromDatabase,
  getPostinganDonasiIdFromDatabase,
  editPostinganDonasiFromDatabase,
  deletePostinganDonasiIdFromDatabase,
  addPendaftaranDonasiToDatabase,
  getAllPendaftaranDonasiFromDatabase,
};
