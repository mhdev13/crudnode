const { insertVideo, getVideos, updateVideo, deleteVideo } = require('../models/video-visit-model');
const { validateVideo } = require ('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const { response } = require('express');

//create Video
exports.createData = (req, res, next) => {
    //buat variable penampung data dan query sql
    const data = {...req.body};
    const querySql = 'INSERT INTO cms_video_visit SET ?';
    
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
    const querySql = "SELECT * FROM cms_video_visit WHERE Status = 'Published'";

    //masukan ke dalam model
    getVideos(res, querySql, next);
}

//update Video
exports.updateData = (req,res,next) => {
    //buat variabel penampung data dan query sql
    const data = { ...req.body};
    const querySearch = 'SELECT * FROM cms_video_visit WHERE id  = ?';
    const queryUpdate = 'UPDATE cms_video_visit SET ? WHERE id = ?';

    //masukan ke dalam model
    updateVideo(res, querySearch, queryUpdate, req.params.id, data, next);
}

//delete Video
exports.deleteData = (req, res, next) => {
    //buat query sql untuk mencari data dan hapus
    const querySearch = 'SELECT * FROM cms_video_visit WHERE id = ?';
    const queryDelete = 'DELETE FROM cms_video_visit WHERE id = ?';

    //masukan ke dalam model
    deleteVideo(res, querySearch, queryDelete, req.params.id, next);
};

