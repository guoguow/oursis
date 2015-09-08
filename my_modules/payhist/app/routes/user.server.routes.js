


var payhist=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/pay').post(payhist.pay);


   // app.route('/reset').post(payhist.reset);
    app.route('/setendow').post(payhist.setendow);
    app.route('/sethealth').post(payhist.sethealth);

}
