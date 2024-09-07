const { insertTutor, getTutors, updateTutor, deleteTutor } = require('../models/tutor-model');
const { validateTutor } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create Tutor
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO cms_tutor SET ?';
    
    //validasi
    var errors = validateTutor(data);
    if (errors){
        return next(new ErrorResponse(errors[0], 400));
    }

    // masukan ke dalam model
    insertTutor(res, querySql, data, next);
};

//show Tutors
exports.readData = (req,res,next) => {
    //buat query sql
    const querySql = 'SELECT description,image FROM cms_tutor';

    //masukan ke dalam model
    getTutors(res, querySql, next);
}

//update Tutor
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM cms_tutor WHERE id  = ?';
    const queryUpdate = 'UPDATE cms_tutor SET ? WHERE id = ?';

    //masukan ke dalam model
    updateTutor(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete Tutor
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM cms_tutor WHERE id = ?';
    const queryDelete = 'DELETE FROM cms_tutor WHERE id = ?';

    //masukan ke dalam model
    deleteTutor(res, querySearch, queryDelete, req.params.id, next);
};

