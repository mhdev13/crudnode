const { insertFaq, getFaqs, updateFaq, deleteFaq } = require('../models/faq-model');
const { validateFaq } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create Faq
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO cms_faq SET ?';
    
    //validasi
    var errors = validateFaq(data);
    if (errors){
        return next(new ErrorResponse(errors[0], 400));
    }

    // masukan ke dalam model
    insertFaq(res, querySql, data, next);
};

//show Faqs
exports.readData = (req,res,next) => {
    //buat query sql
    const querySql = 'SELECT * FROM cms_faq';

    //masukan ke dalam model
    getFaqs(res, querySql, next);
}

//update Faq
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM cms_faq WHERE id  = ?';
    const queryUpdate = 'UPDATE cms_faq SET ? WHERE id = ?';

    //masukan ke dalam model
    updateFaq(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete Faq
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM cms_faq WHERE id = ?';
    const queryDelete = 'DELETE FROM cms_faq WHERE id = ?';

    //masukan ke dalam model
    deleteFaq(res, querySearch, queryDelete, req.params.id, next);
};

