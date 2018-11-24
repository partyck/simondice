const express = require('express');

var User = require('../../models/user');

const router = express.Router();

router.get('/emparejar', (req, res) => {
  res.render('user/empareja', { title: 'Simon dice: Emparejate' });
});

router.post('/emparejar', (req, res) => {
  User.find({}, function (err, users) {
    if (err) {
      console.log("No se puedo realizar la operacion find()");
      throw err;
    }

    console.log(users);

    if (users.length > 0) {
      res.render('user/empareja', {
        nombreemp: users[0].getNombre()
      });
      return;
    } else {
      res.render('user/empareja', { title: 'Lo sentimos' });
      return;
    }
  });
});

module.exports = router;