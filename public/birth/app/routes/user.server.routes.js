


var birth=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/birthindex').post(birth.birthindex);
    app.route('/birthpay').post(birth.birthpay);
    app.route('/birthpaid').post(birth.birthpaid);

}
