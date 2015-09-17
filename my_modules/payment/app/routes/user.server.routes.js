


var payment=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/payment2').post(payment.getPayment);
    app.route('/pmCount').post(payment.getAll);


}
