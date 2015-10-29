
var health=require('../controllers/user.server.controller');


module.exports=function(app){

    app.route('/healthpay').post(health.healthpay);
    app.route('/jmhealthpay').post(health.jmhealthpay);
    app.route('/healthpaid').post(health.healthpaid);
    app.route('/healthindex').post(health.healthindex);
    app.route('/healthindex2').post(health.healthindex2);
    app.route('/healthincome').post(health.healthincome);
    app.route('/healthexp').post(health.healthexp);
}
