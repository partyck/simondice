const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Simon dice'}); 
});

router.post('/', (req, res) => {       
    //res.render('index', "No se encontro a nadie");
});



module.exports = router;    