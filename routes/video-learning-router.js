const {
    createData,
    readData,
    updateData,
    deleteData
} = require ('../controllers/video-learning-controller');
const express = require('express');
const router = express.Router();

router.route('/')
    .post(createData)
    .get(readData);

router.route('/:id')
    .put(updateData)
    .delete(deleteData);

module.exports = router;