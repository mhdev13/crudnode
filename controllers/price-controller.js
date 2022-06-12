const { insertPrice, getPrices, updatePrice, deletePrice } = require('../models/price-model');
const { validatePrice } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create Price
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO mau_price SET ?';
    
    //validasi
    var errors = validatePrice(data);
    if (errors){
        return next(new ErrorResponse(errors[0], 400));
    }

    // masukan ke dalam model
    insertPrice(res, querySql, data, next);
};

//show Prices
exports.readData = (req,res,next) => {
    //buat query sql
    const querySql = 'SELECT * FROM mau_price';

    //masukan ke dalam model
    getPrices(res, querySql, next);
}

//update Price
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM mau_price WHERE id  = ?';
    const queryUpdate = 'UPDATE mau_price SET ? WHERE id = ?';

    //masukan ke dalam model
    updatePrice(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete Price
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM mau_price WHERE id = ?';
    const queryDelete = 'DELETE FROM mau_price WHERE id = ?';

    //masukan ke dalam model
    deletePrice(res, querySearch, queryDelete, req.params.id, next);
};

