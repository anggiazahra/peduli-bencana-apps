// eslint-disable-next-line import/no-unresolved
const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pedulibencana',
});

con.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Connected!');
});

module.exports = { con };
