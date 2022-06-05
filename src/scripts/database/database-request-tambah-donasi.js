const { con } = require('./database-connection');

function addTambahDonasiToDatabase(data) {
  const sql = `INSERT INTO tambahdonasi (id, idPostinganDonasi, namaBank, noRekening, atasNama, jumlahDonasi, tanggalDonasi, status) VALUES ('${data.id}', '${data.idPostinganDonasi}', '${data.namaBank}', '${data.noRekening}', '${data.atasNama}', '${data.jumlahDonasi}', '${data.tanggalDonasi}', '${data.status}')`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getAllTambahDonasiFromDatabase() {
  return new Promise((resolve, reject) => {
    con.query('SELECT * FROM tambahdonasi', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

module.exports = {
  addTambahDonasiToDatabase,
  getAllTambahDonasiFromDatabase,
};
