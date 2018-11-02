const express = require('express');
const router = express.Router();
var lugares;

router.get('/emparejar', (req, res) => {
    res.render('user/emparaja', { title: 'Simon dice: Emparejate'}); 
});
          var dat= new Date(); //Obtienes la fecha
          var dat2 = Date.parse(dat); //Lo parseas para transformarlo

          console.log(dat);
          console.log(dat2)
          res.send("la hora es " + dat);
          return
    

module.exports = router;