


module.exports=function(app){

    require('../../my_modules/UserManage/app/routes/user.server.routes.js')(app);
    /* passport=require('passport');*/
    require('../../my_modules/list/app/routes/user.server.routes.js')(app);
    require('../../my_modules/sistype/app/routes/user.server.routes.js')(app);
    require('../../my_modules/payhist/app/routes/user.server.routes.js')(app);
    require('../../public/endowment/app/routes/user.server.routes.js')(app);
    require('../../public/health/app/routes/user.server.routes.js')(app);
    require('../../public/birth/app/routes/user.server.routes.js')(app);
    require('../../public/injury/app/routes/user.server.routes.js')(app);
    require('../../public/unemployment/app/routes/user.server.routes.js')(app);



   // app.route('/signup').post(usermanage.signup);
 //   app.route('/signin').get(usermanage.signin);
  //  app.get('/signout',usermanage.signout);
  // app.get('/signin',users.signin);
    //app.route('/signup').post(users.signup);
    //  app.get('/signout',users.signout);

   // app.route('/getprofile').post(usermanage.getprofile);
  //  app.route('/saveprofile').post(usermanage.saveprofile);
  //  app.route('/getprofile').post(users.getprofile);
//    app.route('/saveprofile').post(users.saveprofile);

  //  app.route('/userList').post(list.getlist);
  //  app.route('/allList').post(list.getalllist);
  //  app.route('/userList').post(users.getlist);
  //  app.route('/allList').post(users.getalllist);

 //   app.route('/getsistype1').post(sistype.getsistype1);
  //  app.route('/getsistype2').post(sistype.getsistype2);
   // app.route('/getsistype3').post(sistype.getsistype3);

  //  app.route('/pension').post(payhist.pay);
 //   app.route('/health').post(payhist.pay);
}
