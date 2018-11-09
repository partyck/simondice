const router = require('express').Router();
const rutaEmpareja = require('./user/empareja');
const rutaCitas = require('./user/citas');

router.get('/', (req, res) => {
    res.render('home', { title: 'Simon Dice'}); 
});

router.use('/', rutaEmpareja);
router.use('/', rutaCitas);

module.exports = router;    
