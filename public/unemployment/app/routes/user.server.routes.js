


var unemployment=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/unemploymentindex').post(unemployment.unemploymentindex);
    app.route('/unemploymentpay').post(unemployment.unemploymentpay);
    app.route('/unemploymentpaid').post(unemployment.unemploymentpaid);

}
