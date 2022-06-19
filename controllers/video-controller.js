const { insertVideo, getVideos, updateVideo, deleteVideo } = require('../models/video-model');
const { validateVideo } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create Video
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO mau_video SET ?';
    
    //validasi
    var errors = validateVideo(data);
    if (errors){
        return next(new ErrorResponse(errors[0], 400));
    }

    // masukan ke dalam model
    insertVideo(res, querySql, data, next);
};

//show Videos
exports.readData = (req,res,next) => {
    //buat query sql
    const querySql = 'SELECT video, description FROM mau_video';

    //masukan ke dalam model
    getVideos(res, querySql, next);
}

//update Video
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM mau_video WHERE id  = ?';
    const queryUpdate = 'UPDATE mau_video SET ? WHERE id = ?';

    //masukan ke dalam model
    updateVideo(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete Video
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM mau_video WHERE id = ?';
    const queryDelete = 'DELETE FROM mau_video WHERE id = ?';

    //masukan ke dalam model
    deleteVideo(res, querySearch, queryDelete, req.params.id, next);
};

