const { con } = require('./database-connection');

function addRegistrasiToDatabase(data) {
  const sql = `INSERT INTO registrasi (username, namaDepan, namaBelakang, password, passwordKonfirmasi, hakAkses, tanggalDaftar) VALUES ('${data.username}', '${data.namaDepan}', '${data.namaBelakang}', '${data.newPassword}', '${data.newPasswordKonfirmasi}', '${data.hakAkses}', '${data.tanggalDaftar}')`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getAllRegistrasiFromDatabase() {
  return new Promise((resolve, reject) => {
    con.query('SELECT * FROM registrasi', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getRegistrasiFromDatabaseByUsername(username) {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM registrasi WHERE username = '${username}'`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

module.exports = {
  addRegistrasiToDatabase,
  getAllRegistrasiFromDatabase,
  getRegistrasiFromDatabaseByUsername,
};
