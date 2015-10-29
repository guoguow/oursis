


var endow=require('../controllers/user.server.controller');


module.exports=function(app){

    app.route('/endowpay').post(endow.endowpay);
    app.route('/jmendowpay').post(endow.jmendowpay);
    app.route('/endowpaid').post(endow.endowpaid);
    app.route('/jmendowpaid').post(endow.jmendowpaid);
    app.route('/endowindex').post(endow.endowindex);
    app.route('/endowindex2').post(endow.endowindex2);
    app.route('/endowincome').post(endow.endowincome);
    app.route('/endowexp').post(endow.endowexp);


}
