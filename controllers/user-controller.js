const { insertUser, getUsers, updateUser, deleteUser } = require('../models/user-model');
const { validateUser } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create User
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO users SET ?';
    
    //validasi
    var errors = validateUser(data);
    if (errors){
        return next(new ErrorResponse(errors[0], 400));
    }

    // masukan ke dalam model
    insertUser(res, querySql, data, next);
};

//show Users
exports.readData = (req,res,next) => {
    //buat query sql
    const querySql = 'SELECT * FROM users';

    //masukan ke dalam model
    getUsers(res, querySql, next);
}

//update User
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM users WHERE id  = ?';
    const queryUpdate = 'UPDATE users SET ? WHERE id = ?';

    //masukan ke dalam model
    updateUser(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete User
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM users WHERE id = ?';
    const queryDelete = 'DELETE FROM users WHERE id = ?';

    //masukan ke dalam model
    deleteUser(res, querySearch, queryDelete, req.params.id, next);
};

