

var sistype=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/getsistype').post(sistype.getsistype);
}






