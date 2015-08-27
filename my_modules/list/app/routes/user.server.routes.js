


var list=require('../controllers/user.server.controller');


module.exports=function(app){

    app.route('/userList').post(list.getlist);
    app.route('/allList').post(list.getalllist);

}
