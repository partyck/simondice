const express = require('express');
const router = express.Router();
const User = require('../model/user');
var love

router.get('/', (req, res) => {
    res.render('index', { title: 'Simon Dice' });
});

router.post('/match', (req, res) => {
    var value = req.body;
    console.log(value);
    if (match(value)) {
        res.send('<script>alert("se ha encontrado el amor")</script>');
    } else {
        res.send('<script>alert("sigue participando")</script>');
    }
});

async function match(userId) {
    const users = await User.find();
    console.log(users.length);
    if (users.length < 1) {
        return false;
    } else {
        love = users[0];
        return true;
    }
};


module.exports = router;    