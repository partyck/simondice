const User = require('../models/user');
const registroUsuarios = require('../routes/user/registro');
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
    var tipo = req.body.tipo_date;
    var año;
    if(tipo == "Anual"){
        año = (req.body.semester) * 2;
    }else{
        año = req.body.semester;
    }

    const user = new User({
        name: req.body.name,
        birthdate: req.body.birthday,
        sex: req.body.sex,
        course: req.body.course,
        semester: año,
        sexOrientation: req.body.sexOrientation,
        minAge: req.body.minAge,
        maxAge: req.body.maxAge,
        email: req.body.email,
        password: req.body.password
    });
    user.save(function(err){
        if(err){
            console.log(err);
            res.render('registrar',{estado:0});
        }else{ 
            res.render('home',{estado:1});
            registroUsuarios.insertarIdUsuario(user.id);
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