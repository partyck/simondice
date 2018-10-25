const express = require('express');

<<<<<<< HEAD
const router = express.Router();
=======
router.get('/', (req, res) => {
    res.render('index', { title: 'Simon Dice'}); 
});
>>>>>>> 70a0b9483bd07aef928f8cc777c4ee524f763813

var rutaEmpareja = require('./user/empareja');

router.use('/', rutaEmpareja);

module.exports = router;    