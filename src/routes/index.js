const express = require('express');
const router = express.Router();
const User = require('../models/user');
var love

router.get('/emparejar', (req, res) => {
    
    res.render('index', { title: 'Simon Dice' });
    
});
//esto es para provar SI HAY MEJORAS
router.post('/match', (req, res) => {
    var value = req.body;
    match(value,res);
});

async function match(userId,res) {
    const users = await User.find();
    if (users.length < 1) {
        res.send('<script>alert("sigue participando")</script>');
    } else {
        love = users[0];
        res.send('<script>alert("Encontraste una pareja")</script>');
    }
};


module.exports = router;       
