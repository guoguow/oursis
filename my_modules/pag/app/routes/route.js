/**
 * Created by LuWenWen on 2015/10/15.
 */



var pag=require('../controllers/controller');


module.exports=function(app){
    app.route('/getCount').post(pag.getCount);
   // app.route('/birthpay').post(pag.birthpay);
   // app.route('/birthpaid').post(pag.birthpaid);

}
