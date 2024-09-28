const { insertPromotion, getPromotions, updatePromotion, deletePromotion } = require('../models/Promotion-model');
const { validatePromotion } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create Promotion
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO cms_promotion SET ?';
    
    //validasi
    var errors = validatePromotion(data);
    if (errors){
        return next(new ErrorResponse(errors[0], 400));
    }

    // masukan ke dalam model
    insertPromotion(res, querySql, data, next);
};

//show Promotions
exports.readData = (req,res,next) => {
    //buat query sql
    const querySql = 'SELECT title,image,status FROM cms_promotion';

    //masukan ke dalam model
    getPromotions(res, querySql, next);
}

//update Promotion
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM cms_promotion WHERE id  = ?';
    const queryUpdate = 'UPDATE cms_promotion SET ? WHERE id = ?';

    //masukan ke dalam model
    updatePromotion(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete Promotion
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM cms_promotion WHERE id = ?';
    const queryDelete = 'DELETE FROM cms_promotion WHERE id = ?';

    //masukan ke dalam model
    deletePromotion(res, querySearch, queryDelete, req.params.id, next);
};

