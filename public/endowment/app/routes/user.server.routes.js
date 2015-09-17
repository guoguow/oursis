


var endow=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/setendow').post(endow.setendow);
    app.route('/endowpay').post(endow.endowpay);
    app.route('/endowpaid').post(endow.endowpaid);
    app.route('/endowindex').post(endow.endowindex);
}
