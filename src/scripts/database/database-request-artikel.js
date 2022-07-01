const { con } = require('./database-connection');

// Postingan Artikel
function addPostinganArtikelToDatabase(data) {
  const sql = `INSERT INTO postinganartikel (id, judul, gambarArtikel, isiArtikel, sumber, insertedAt, updatedAt) VALUES ('${data.id}', '${data.judul}', '${data.namaGambar}', '${data.isiArtikel}', '${data.sumber}', '${data.insertedAt}', '${data.updatedAt}')`;

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
    con.query('SELECT * FROM postinganartikel', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getPostinganArtikelIdFromDatabase(id) {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM postinganartikel WHERE id = '${id}'`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function editPostinganArtikelFromDatabase(data) {
  const sql = `UPDATE postinganartikel SET judul = '${data.judul}', gambarArtikel = '${data.namaGambar}', isiArtikel = '${data.isiArtikel}', sumber = '${data.sumber}', updatedAt = '${data.updatedAt}' WHERE id = '${data.id}'`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function editPostinganArtikelWithoutgambarArtikelFromDatabase(data) {
  const sql = `UPDATE postinganartikel SET judul = '${data.judul}', sumber = '${data.sumber}', isiArtikel = '${data.isiArtikel}', updatedAt = '${data.updatedAt}' WHERE id = '${data.id}'`;

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
    con.query(`DELETE FROM postinganartikel WHERE id = '${id}'`, (err, results) => {
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
  editPostinganArtikelWithoutgambarArtikelFromDatabase,
  deletePostinganArtikelIdFromDatabase,
};
