const { insertNews, getNews, updateNews, deleteNews } = require('../models/news-model');
const { validateNews } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create News
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO cms_news SET ?';
    
    //validasi
    var errors = validateNews(data);
    if (errors){
        return next(new ErrorResponse(errors[0], 400));
    }

    // masukan ke dalam model
    insertNews(res, querySql, data, next);
};

//show Newss
exports.readData = (req,res,next) => {
    //buat query sql
    const querySql = "SELECT title,image,status FROM cms_news where status = 'Active'";

    //masukan ke dalam model
    getNews(res, querySql, next);
}

//update News
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM cms_news WHERE id  = ?';
    const queryUpdate = 'UPDATE cms_news SET ? WHERE id = ?';

    //masukan ke dalam model
    updateNews(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete News
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM cms_news WHERE id = ?';
    const queryDelete = 'DELETE FROM cms_news WHERE id = ?';

    //masukan ke dalam model
    deleteNews(res, querySearch, queryDelete, req.params.id, next);
};

