const dbConfig = require('../config/db.config.js');
const Sequilize = require('sequelize');
const sequelize = new Sequilize (
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWROD, {
        host :dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        poll : {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
});

const db = {};

db.Sequelize = Sequilize;
db.sequelize = sequelize;

//define models
db.books = require('./book.model')(sequelize, Sequilize);
module.exports = db;