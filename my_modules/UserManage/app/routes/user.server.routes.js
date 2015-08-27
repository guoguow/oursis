


var usermanage=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/signup').post(usermanage.signup);
    app.route('/signin').get(usermanage.signin);
    app.get('/signout',usermanage.signout);
    app.route('/getprofile').post(usermanage.getprofile);
    app.route('/saveprofile').post(usermanage.saveprofile);
    //  app.route('/signin').get(users.signin);
    // app.get('/signin',users.signin);

}
