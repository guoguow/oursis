


var injury=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/injuryindex').post(injury.injuryindex);
    app.route('/injurypay').post(injury.injurypay);
    app.route('/injurypaid').post(injury.injurypaid);

}
