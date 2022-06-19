const { insertTestimoni, getTestimonis, updateTestimoni, deleteTestimoni } = require('../models/testimoni-model');
const { validateTestimoni } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create Testimoni
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO testimoni SET ?';
    
    //validasi
    var errors = validateTestimoni(data);
    if (errors){
        return next(new ErrorResponse(errors[0], 400));
    }

    // masukan ke dalam model
    insertTestimoni(res, querySql, data, next);
};

//show Testimonis
exports.readData = (req,res,next) => {
    //buat query sql
    const querySql = 'SELECT fullname,photo,comment FROM testimoni';

    //masukan ke dalam model
    getTestimonis(res, querySql, next);
}

//update Testimoni
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM testimoni WHERE id  = ?';
    const queryUpdate = 'UPDATE testimoni SET ? WHERE id = ?';

    //masukan ke dalam model
    updateTestimoni(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete Testimoni
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM testimoni WHERE id = ?';
    const queryDelete = 'DELETE FROM testimoni WHERE id = ?';

    //masukan ke dalam model
    deleteTestimoni(res, querySearch, queryDelete, req.params.id, next);
};

