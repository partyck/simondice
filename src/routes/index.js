const express = require('express');
const User = require ('../models/user');
const UserController = require('../controllers/user');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Simón Dice'}); 
});

/*router.get('/registrar', (req, res) => {
    res.render('./registrar'); 
});*/

router.get('/user', UserController.index);
router.get('/user/create', UserController.create);
router.post('/user', UserController.store);
router.get('/user/:id', UserController.show);
router.get('/user/:id/edit', UserController.edit);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.destroy);


var rutaEmpareja = require('./user/empareja');

router.use('/', rutaEmpareja);

module.exports = router;    
