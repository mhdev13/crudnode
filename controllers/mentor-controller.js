const { insertMentor, getMentors, updateMentor, deleteMentor } = require('../models/mentor-model');
const { validateMentor } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create Mentor
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO mentors SET ?';
    
    //validasi
    var errors = validateMentor(data);
    if (errors){
        return next(new ErrorResponse(errors[0], 400));
    }

    // masukan ke dalam model
    insertMentor(res, querySql, data, next);
};

//show Mentors
exports.readData = (req,res,next) => {
    //buat query sql
    const querySql = 'SELECT fullname,no_certified,photo,experience FROM mentors';

    //masukan ke dalam model
    getMentors(res, querySql, next);
}

//update Mentor
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM mentors WHERE id  = ?';
    const queryUpdate = 'UPDATE mentors SET ? WHERE id = ?';

    //masukan ke dalam model
    updateMentor(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete Mentor
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM mentors WHERE id = ?';
    const queryDelete = 'DELETE FROM mentors WHERE id = ?';

    //masukan ke dalam model
    deleteMentor(res, querySearch, queryDelete, req.params.id, next);
};

