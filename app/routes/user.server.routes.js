/**
 * Created by qzli on 15/4/6.
 */
var users=require('../controllers/user.server.controller');
var usermanage=require('../../my_modules/UserManage/app/controllers/user.server.controller.js');
   /* passport=require('passport');*/
var list=require('../../my_modules/list/app/controllers/user.server.controller.js');
var sistype=require('../../my_modules/sistype/app/controllers/user.server.controller.js');

module.exports=function(app){
    app.route('/signup').post(usermanage.signup);
    app.route('/signin').get(usermanage.signin);
    app.get('/signout',usermanage.signout);
  // app.get('/signin',users.signin);
    //app.route('/signup').post(users.signup);
    //  app.get('/signout',users.signout);

    app.route('/getprofile').post(usermanage.getprofile);
    app.route('/saveprofile').post(usermanage.saveprofile);
  //  app.route('/getprofile').post(users.getprofile);
//    app.route('/saveprofile').post(users.saveprofile);

    app.route('/userList').post(list.getlist);
    app.route('/allList').post(list.getalllist);
  //  app.route('/userList').post(users.getlist);
  //  app.route('/allList').post(users.getalllist);

    app.route('/getsistype1').post(sistype.getsistype1);
    app.route('/getsistype2').post(sistype.getsistype2);
    app.route('/getsistype3').post(sistype.getsistype3);
}
