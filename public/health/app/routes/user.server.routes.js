
var health=require('../controllers/user.server.controller');


module.exports=function(app){

    app.route('/healthpay').post(health.healthpay);
    app.route('/jmhealthpay').post(health.jmhealthpay);
    app.route('/healthpaid').post(health.healthpaid);
    app.route('/healthindex').post(health.healthindex);
    app.route('/healthindex2').post(health.healthindex2);

    app.route('/getline').post(health.getline);


    app.route('/healthye').post(health.healthye);
    app.route('/healthye2').post(health.healthye2);

    app.route('/healthincome').post(health.healthincome);
    app.route('/healthexp').post(health.healthexp);

    app.route('/hpayRecord').post(health.healthpayrecord);
    app.route('/haccRecord').post(health.healthaccrecord);
    app.route('/hpaidRecord').post(health.healthpaidrecord);

    app.route('/hyearpay').post(health.hyearpay);
    app.route('/hyearpaid').post(health.hyearpaid);

    app.route('/hpaidz').post(health.hpaidz);
    app.route('/hpaidm').post(health.hpaidm);
    app.route('/hpaidmen').post(health.hpaidmen);
    app.route('/hpaidzhu').post(health.hpaidzhu);

    app.route('/hpaystack').post(health.hpaystack);


}
