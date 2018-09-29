const mongoose = require('mongoose');
 
let db;

module.exports = function conections(){
    if(!db){
        console.log('no hay db');
        db = mongoose.createConnection('mongodb://localhost/tinderumss', {
            useMongoClient: true
        });
    }
    console.log('SIII hay db');
    return db;
};