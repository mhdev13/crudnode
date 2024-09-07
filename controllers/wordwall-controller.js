const { insertWordwall, getWordwall, updateWordwall, deleteWordwall } = require('../models/wordwall-model');
const { validateWordwall } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create Wordwall
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO cms_wordwall SET ?';
    
    //validasi
    var errors = validateWordwall(data);
    if (errors){
        return next(new ErrorResponse(errors[0], 400));
    }

    // masukan ke dalam model
    insertWordwall(res, querySql, data, next);
};

//show Wordwalls
exports.readData = (req,res,next) => {
    //buat query sql
    const querySql = "SELECT id,title,description,category,Status,image_thumbnail,Thumbnail FROM cms_wordwall where Thumbnail ='active'"

    //masukan ke dalam model
    getWordwall(res, querySql, next);
}

//update Wordwall
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM cms_wordwall WHERE id  = ?';
    const queryUpdate = 'UPDATE cms_wordwall SET ? WHERE id = ?';

    //masukan ke dalam model
    updateWordwall(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete Wordwall
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM cms_wordwall WHERE id = ?';
    const queryDelete = 'DELETE FROM cms_wordwall WHERE id = ?';

    //masukan ke dalam model
    deleteWordwall(res, querySearch, queryDelete, req.params.id, next);
};

