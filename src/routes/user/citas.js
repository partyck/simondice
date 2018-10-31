const express = require('express');
const Date = require('../../models/date');
const router = express.Router();

router.get('/citas', (req, res) => {
    res.render('user/citas'); 
});

module.exports = router;