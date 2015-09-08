


var usermanage=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/signup').post(usermanage.signup);
    app.route('/signin').get(usermanage.signin);
    app.get('/signout',usermanage.signout);
    app.route('/profile').get(usermanage.getprofile);
    app.route('/checkprofile').post(usermanage.checkprofile);
    app.route('/saveprofile').post(usermanage.saveprofile);
    //  app.route('/signin').get(users.signin);
    // app.get('/signin',users.signin);

}
