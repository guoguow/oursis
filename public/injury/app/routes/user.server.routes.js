


var injury=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/setinjury').post(injury.setinjury);
    app.route('/injuryindex').post(injury.injuryindex);
}
