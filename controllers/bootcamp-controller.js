const { insertBootcamp, getBootcamps, updateBootcamp, deleteBootcamp } = require('../models/bootcamp-model');

//create bootcamp
exports.createData = (req, res) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO bootcamp SET ?';

    // masukan ke dalam model
    insertBootcamp(res, querySql, data);
};

//show bootcamps
exports.readData = (req,res) => {
    //buat query sql
    const querySql = 'SELECT * FROM bootcamp';

    //masukan ke dalam model
    getBootcamps(res, querySql);
}

//update bootcamp
exports.updateData = (req,res) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM bootcamp WHERE id  = ?';
    const queryUpdate = 'UPDATE bootcamp SET ? WHERE id = ?';

    //masukan ke dalam model
    updateBootcamp(res, querySearch, queryUpdate, req.params.id, data);
}

//delete bootcamp
exports.deleteData = (req, res) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM bootcamp WHERE id = ?';
    const queryDelete = 'DELETE FROM bootcamp WHERE id = ?';

    //masukan ke dalam model
    deleteBootcamp(res, querySearch, queryDelete, req.params.id);
};

