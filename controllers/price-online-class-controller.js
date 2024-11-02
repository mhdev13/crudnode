const { insertPriceOnlineClass, getPricesOnlineClass, updatePriceOnlineClass, deletePriceOnlineClass } = require('../models/price-online-class-model');
const { validatePrice } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create Price
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO cms_price_online_class SET ?';
    
    //validasi
    var errors = validatePrice(data);
    if (errors){
        return next(new ErrorResponse(errors[0], 400));
    }

    // masukan ke dalam model
    insertPriceOnlineClass(res, querySql, data, next);
};

//show Prices
exports.readData = (req,res,next) => {
    //buat query sql
    const querySql = 'SELECT * FROM cms_price_online_class';

    //masukan ke dalam model
    getPricesOnlineClass(res, querySql, next);
}

//update Price
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM cms_price_online_class WHERE id  = ?';
    const queryUpdate = 'UPDATE cms_price_online_class SET ? WHERE id = ?';

    //masukan ke dalam model
    updatePriceOnlineClass(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete Price
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM cms_price_online_class WHERE id = ?';
    const queryDelete = 'DELETE FROM cms_price_online_class WHERE id = ?';

    //masukan ke dalam model
    deletePriceOnlineClass(res, querySearch, queryDelete, req.params.id, next);
};

