const { con } = require('./database-connection');

// Postingan Artikel
function addPostinganArtikelToDatabase(data) {
  const sql = `INSERT INTO fiturartikel (id, judul, sumber, isiArtikel, gambarArtikel, insertedAt, updatedAt) VALUES ('${data.id}', '${data.judul}', '${data.sumber}', '${data.isiArtikel}', '${data.gambarArtikel}', '${data.updatedAt}', '${data.insertedAt}')`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getAllPostinganArtikelFromDatabase() {
  return new Promise((resolve, reject) => {
    con.query('SELECT * FROM fiturartikel', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getPostinganArtikelIdFromDatabase(id) {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM fiturartikel WHERE id = '${id}'`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function editPostinganArtikelFromDatabase(data) {
  const sql = `UPDATE fiturartikel SET judul = '${data.judul}', gambarArtikel = '${data.namaGambar}', isiArtikel = '${data.isiArtikel}', sumber = '${data.sumber}', updatedAt = '${data.updatedAt}' WHERE id = '${data.id}'`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function deletePostinganArtikelIdFromDatabase(id) {
  return new Promise((resolve, reject) => {
    con.query(`DELETE FROM fiturartikel WHERE id = '${id}'`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}
// Postingan Artikel End

module.exports = {
  addPostinganArtikelToDatabase,
  getAllPostinganArtikelFromDatabase,
  getPostinganArtikelIdFromDatabase,
  editPostinganArtikelFromDatabase,
  deletePostinganArtikelIdFromDatabase,
};
