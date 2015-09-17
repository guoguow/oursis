


var health=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/sethealth').post(health.sethealth);

}
