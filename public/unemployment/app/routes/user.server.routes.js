


var unemployment=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/unemploymentindex').post(unemployment.unemploymentindex);
    app.route('/unemploymentpay').post(unemployment.unemploymentpay);
    app.route('/unemploymentpaid').post(unemployment.unemploymentpaid);

    app.route('/getidcard').post(unemployment.getidcard);

    app.route('/upayRecord').post(unemployment.upayrecord);
    app.route('/upaidRecord').post(unemployment.upaidrecord);
    app.route('/upaidRecordCount').post(unemployment.upaidrecordCount);

    app.route('/uyearpay').post(unemployment.uyearpay);
    app.route('/uyearpaid').post(unemployment.uyearpaid);

    app.route('/unpaystack').post(unemployment.unpaystack);
    app.route('/unpaidstack').post(unemployment.unpaidstack);
}
