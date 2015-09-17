


var unemploy=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/setunemployment').post(unemploy.setunemploy);

}
