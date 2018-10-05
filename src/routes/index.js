const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Tinder Umss'}); 
});

router.post('./',(req res)=>{
  
});

module.exports = router;    