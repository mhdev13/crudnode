const { insertPartner, getPartners, updatePartner, deletePartner } = require('../models/partner-model');
const { validatePartner } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create Partner
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO mau_partner SET ?';
    
    //validasi
    var errors = validatePartner(data);
    if (errors){
        return next(new ErrorResponse(errors[0], 400));
    }

    // masukan ke dalam model
    insertPartner(res, querySql, data, next);
};

//show Partners
exports.readData = (req,res,next) => {
    //buat query sql
    const querySql = 'SELECT * FROM mau_partner';

    //masukan ke dalam model
    getPartners(res, querySql, next);
}

//update Partner
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM mau_partner WHERE id  = ?';
    const queryUpdate = 'UPDATE mau_partner SET ? WHERE id = ?';

    //masukan ke dalam model
    updatePartner(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete Partner
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM mau_partner WHERE id = ?';
    const queryDelete = 'DELETE FROM mau_partner WHERE id = ?';

    //masukan ke dalam model
    deletePartner(res, querySearch, queryDelete, req.params.id, next);
};

