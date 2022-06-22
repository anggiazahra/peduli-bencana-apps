const { con } = require('./database-connection');

function addPendaftaranRelawanToDatabase(data) {
  const sql = `INSERT INTO pendaftaranrelawan (id, idPostinganRelawan, username, namaLengkap, noTelepon, kabKota, provinsi, tanggalDaftar) VALUES ('${data.id}', '${data.idPostinganRelawan}', '${data.username}', '${data.namaLengkap}', '${data.noTelepon}', '${data.kabKota}', '${data.provinsi}', '${data.tanggalDaftar}')`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return (console.log(reject(err)));
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

function getPendaftaranRelawanByUsernameAndIdPostinganFromDatabase(username, idPostinganRelawan) {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM pendaftaranrelawan WHERE username = '${username}' AND idPostinganRelawan = '${idPostinganRelawan}'`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

module.exports = {
  addPendaftaranRelawanToDatabase,
  getAllPendaftaranRelawanFromDatabase,
  getPendaftaranRelawanByUsernameAndIdPostinganFromDatabase,
};
