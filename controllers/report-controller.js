const { insertReport, getReports, updateReport, deleteReport } = require('../models/report-model');
const { validateReport } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create Report
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO mau_monthly_report SET ?';
    
    //validasi
    var errors = validateReport(data);
    if (errors){
        return next(new ErrorResponse(errors[0], 400));
    }

    // masukan ke dalam model
    insertReport(res, querySql, data, next);
};

//show Reports
exports.readData = (req,res,next) => {
    //buat query sql
    const querySql = 'SELECT SUM(COUNT) AS report FROM mau_monthly_report';

    //masukan ke dalam model
    getReports(res, querySql, next);
}

//update Report
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM mau_monthly_report WHERE id  = ?';
    const queryUpdate = 'UPDATE mau_monthly_report SET ? WHERE id = ?';

    //masukan ke dalam model
    updateReport(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete Report
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM mau_monthly_report WHERE id = ?';
    const queryDelete = 'DELETE FROM mau_monthly_report WHERE id = ?';

    //masukan ke dalam model
    deleteReport(res, querySearch, queryDelete, req.params.id, next);
};

