const { con } = require('./database-connection');

// Postingan Relawan
function addPostinganRelawanToDatabase(data) {
  const sql = `INSERT INTO postinganRelawan (id, judulPostingan, poster, tanggalMulai, tanggalBerakhir, kabKota, provinsi, alamatLengkap, persyaratan, insertedAt, updatedAt) VALUES ('${data.id}', '${data.judulPostingan}', '${data.namaPoster}', '${data.tanggalMulai}', '${data.tanggalBerakhir}', '${data.kabKota}', '${data.provinsi}', '${data.alamatLengkap}', '${data.persyaratan}', '${data.insertedAt}', '${data.updatedAt}')`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getAllPostinganRelawanFromDatabase() {
  return new Promise((resolve, reject) => {
    con.query('SELECT * FROM postinganRelawan', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getPostinganRelawanIdFromDatabase(id) {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM postinganRelawan WHERE id = '${id}'`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function editPostinganRelawanFromDatabase(data) {
  const sql = `UPDATE postinganRelawan SET judulPostingan = '${data.judulPostingan}', poster = '${data.namaPoster}', tanggalMulai = '${data.tanggalMulai}', tanggalBerakhir = '${data.tanggalBerakhir}', kabKota = '${data.kabKota}', provinsi = '${data.provinsi}', alamatLengkap = '${data.alamatLengkap}', persyaratan = '${data.persyaratan}', updatedAt = '${data.updatedAt}' WHERE id = '${data.id}'`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function deletePostinganRelawanIdFromDatabase(id) {
  return new Promise((resolve, reject) => {
    con.query(`DELETE FROM postinganRelawan WHERE id = '${id}'`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}
// Postingan Relawan End

// Pendaftaran Rewalan
function addPendaftaranRelawanToDatabase(data) {
  const sql = `INSERT INTO pendaftaranrelawan (id, namaLengkap, noTelepon, kabKota, provinsi, tanggalDaftar) VALUES ('${data.id}', '${data.namaLengkap}', '${data.noTelepon}', '${data.kabKota}', '${data.provinsi}', '${data.tanggalDaftar}')`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getAllPendaftaranRelawanFromDatabase() {
  return new Promise((resolve, reject) => {
    con.query('SELECT * FROM pendaftaranrelawan', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

module.exports = {
  addPostinganRelawanToDatabase,
  getAllPostinganRelawanFromDatabase,
  getPostinganRelawanIdFromDatabase,
  editPostinganRelawanFromDatabase,
  deletePostinganRelawanIdFromDatabase,
  addPendaftaranRelawanToDatabase,
  getAllPendaftaranRelawanFromDatabase,
};
