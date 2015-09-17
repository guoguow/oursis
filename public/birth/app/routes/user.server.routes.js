


var birth=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/setbirth').post(birth.setbirth);

}
