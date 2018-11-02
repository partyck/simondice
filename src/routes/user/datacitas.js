const express = require('express');

var  date = require('../../models/date');
var  lugar = require('./generarcita');
const router = express.Router();

router.get('/emparejar', (req, res) => {
    res.render('user/empareja', { title: 'Simon dice: Emparejate'}); 
});

    router.post('/emparejar', async (req , dates) => {
     const q = new date(req.body);
     await q.save(error,lugar);
     dates.send('recibido');

    });

module.exports = router;