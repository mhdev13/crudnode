const mysql = require('mysql');

//buat konfigurasi koneksi
const koneksi = mysql.createConnection({
    host : '103.129.222.7',
    user : 'maungaji_admin',
    password : 'Ahmad@123456!',
    database : 'maungaji_cms',
    multipleStatements : true
});

//koneksi database 
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySql Connected ...');
});

module.exports = koneksi;