const express = require('express');
const Date = require('../../models/date');
const router = express.Router();

router.get('/citas', async (req, res) => {
    var dates = await Date.find();
    console.log(dates);
    res.render('user/citas', {
        dates
    }); 
});

router.get('/accept/:id', async (req, res, next) => {
    let { id } = req.params;
    const date = await Date.findById(id);
    console.log (date);
    if (date.state1 == "accept"){
        date.state2 = "accept";
    }else{
        date.state1 = "accept";
    }
    date.state1 = "accept";
    await date.save();
    res.redirect('/citas');
});



module.exports = router;