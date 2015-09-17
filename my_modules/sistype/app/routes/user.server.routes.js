

var sistype=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/getsistype1').post(sistype.getsistype1);
    app.route('/getsistype2').post(sistype.getsistype2);
    app.route('/getsistype3').post(sistype.getsistype3);
    app.route('/getsistype4').post(sistype.getsistype4);
    app.route('/getsistype5').post(sistype.getsistype5);
}






