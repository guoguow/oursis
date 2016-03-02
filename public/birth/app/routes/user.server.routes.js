


var birth=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/birthindex').post(birth.birthindex);
    app.route('/birthpay').post(birth.birthpay);
    app.route('/birthpaid').post(birth.birthpaid);

    app.route('/bpayRecord').post(birth.birthpayrecord);
    app.route('/bpaidRecord').post(birth.birthpaidrecord);
    app.route('/byearpay').post(birth.byearpay);
    app.route('/byearpaid').post(birth.byearpaid);

    app.route('/bpaystack').post(birth.bpaystack);
    app.route('/bpaidstack').post(birth.bpaidstack);
}
