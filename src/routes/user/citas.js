const express = require('express');
const Date = require('../../models/date');
const router = express.Router();

router.get('/citas', async (req, res) => {
    var dates = await Date.find();
    res.render('user/citas', {
        dates
    }); 
});



module.exports = router;