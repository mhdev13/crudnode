const mysql = require('mysql');

//buat konfigurasi koneksi
const koneksi = mysql.createConnection({
    host : 'localhost',
    user : 'sysdb',
    password : '4ktnbOU2hDLmHsaZ',
    database : 'bootcamp',
    multipleStatements : true
});

//koneksi database 
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySql Connected ...');
});

module.exports = koneksi;