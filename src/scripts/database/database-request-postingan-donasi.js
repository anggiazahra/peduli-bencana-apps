const { con } = require('./database-connection');

function addPostinganDonasiToDatabase(data) {
  const sql = `INSERT INTO postingandonasi (id, judulPostingan, namaPoster, tanggalMulai, tanggalBerakhir, kabKota, provinsi, alamatLengkap, penanggungJawab, noTelepon, pekerjaan, namaBank, noRekening, targetDonasi, deskripsiDonasi, insertedAt, updatedAt) VALUES ('${data.id}', '${data.judulPostingan}', '${data.namaPoster}', '${data.tanggalMulai}', '${data.tanggalBerakhir}', '${data.kabKota}', '${data.provinsi}', '${data.alamatLengkap}', '${data.penanggungJawab}', '${data.noTelepon}', '${data.pekerjaan}', '${data.namaBank}', '${data.noRekening}', '${data.targetDonasi}', '${data.deskripsiDonasi}', '${data.insertedAt}', '${data.updatedAt}')`;

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
    con.query('SELECT * FROM postingandonasi', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getPostinganDonasiIdFromDatabase(id) {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM postingandonasi WHERE id = '${id}'`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function editPostinganDonasiFromDatabase(data) {
  const sql = `UPDATE postingandonasi SET judulPostingan = '${data.judulPostingan}', namaPoster = '${data.namaPoster}', tanggalMulai = '${data.tanggalMulai}', tanggalBerakhir = '${data.tanggalBerakhir}', kabKota = '${data.kabKota}', provinsi = '${data.provinsi}', alamatLengkap = '${data.alamatLengkap}', penanggungJawab = '${data.penanggungJawab}', noTelepon = '${data.noTelepon}', pekerjaan = '${data.pekerjaan}', namaBank = '${data.namaBank}', noRekening = '${data.noRekening}', targetDonasi = '${data.targetDonasi}', deskripsiDonasi = '${data.deskripsiDonasi}', updatedAt = '${data.updatedAt}' WHERE id = '${data.id}'`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function editPostinganDonasiWithoutPosterFromDatabase(data) {
  const sql = `UPDATE postingandonasi SET judulPostingan = '${data.judulPostingan}', tanggalMulai = '${data.tanggalMulai}', tanggalBerakhir = '${data.tanggalBerakhir}', kabKota = '${data.kabKota}', provinsi = '${data.provinsi}', alamatLengkap = '${data.alamatLengkap}', penanggungJawab = '${data.penanggungJawab}', noTelepon = '${data.noTelepon}', pekerjaan = '${data.pekerjaan}', namaBank = '${data.namaBank}', noRekening = '${data.noRekening}', targetDonasi = '${data.targetDonasi}', deskripsiDonasi = '${data.deskripsiDonasi}', updatedAt = '${data.updatedAt}' WHERE id = '${data.id}'`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function deletePostinganDonasiIdFromDatabase(id) {
  return new Promise((resolve, reject) => {
    con.query(`DELETE FROM postingandonasi WHERE id = '${id}'`, (err, results) => {
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
  editPostinganDonasiWithoutPosterFromDatabase,
  deletePostinganDonasiIdFromDatabase,
};
