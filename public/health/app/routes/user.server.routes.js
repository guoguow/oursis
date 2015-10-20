
var health=require('../controllers/user.server.controller');


module.exports=function(app){

    app.route('/healthpay').post(health.healthpay);
    app.route('/jmhealthpay').post(health.jmhealthpay);
    app.route('/healthpaid01').post(health.healthpaid01);
    app.route('/healthpaid02').post(health.healthpaid02);
    app.route('/healthpaid03').post(health.healthpaid03);
    app.route('/healthindex').post(health.healthindex);
}
