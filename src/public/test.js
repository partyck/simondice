module.exports = function(app)
{
 
 app.get("/", function(req, res){

 res.render('index', { 
 title: 'Lista de usuarios de UDP',
 usuarios : ['Israel', 'Juan', 'Andrés', 'Manuel']
 });
 });
 
 


}