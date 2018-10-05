const express = require('express');
var user = require('../model/user');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', { title: 'Simon dice'}); 
});

router.post('./',(req, res) =>{
  User.find({},function(err,users){
   if(err) throw err;
   console.log(users);

   if(users.length>0){
       res.send("se encontro a:"+users[0].getNombre());
       return;
   }else{
       res.send("sigue paricipando");
       return;
   }
  });
});

module.exports = router;    