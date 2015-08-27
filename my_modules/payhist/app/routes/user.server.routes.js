


var payhist=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/endowment').post(payhist.pay);
    app.route('/health').post(payhist.pay);

}
