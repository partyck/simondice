const User = require('../models/user');
/*exports.setModel = function(modelo){
    User = modelo;
};*/
exports.index = function(req, res){
    User.find({}, function(error, users){
        if(error){
           res.send('Ha surgido un error.');
        }else{
           res.render('user/empareja', {
              users: users
           });
        }
     })
};
exports.create = function(req, res){
    res.render('registrar');
};
exports.store = function(req, res){
    const user = new User({
        name: req.body.name,
        birthday: req.body.birthday,
        sex: req.body.sex,
        course: req.body.course,
        semester: req.body.semester,
        sexOrientation: req.body.sexOrientation,
        minAge: req.body.minAge,
        maxAge: req.body.maxAge,
        email: req.body.email,
        password: req.body.password
    });
    user.save(function(err){
        if(err){
            console.log(err);
            res.render('registrar',{estado:true});
        }else{ 
            res.render('home');
        }
     });
};
exports.show = function(req, res){
   //
};
exports.edit = function(req, res){
   //
};
exports.update = function(req, res){
   //
};
exports.destroy = function(req, res){
   //
};