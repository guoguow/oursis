


var payhist=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/pension').post(payhist.pay);
    app.route('/health').post(payhist.pay);

}
