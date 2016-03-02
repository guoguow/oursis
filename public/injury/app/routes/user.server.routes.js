


var injury=require('../controllers/user.server.controller');


module.exports=function(app){
    app.route('/injuryindex').post(injury.injuryindex);
    app.route('/injurypay').post(injury.injurypay);
    app.route('/injurypaid').post(injury.injurypaid);

    app.route('/ipayRecord').post(injury.injurypayrecord);
    app.route('/ipaidRecord').post(injury.injurypaidrecord);
    app.route('/ipaidRecord2').post(injury.injurypaidrecord2);

    app.route('/iyearpay').post(injury.iyearpay);
    app.route('/iyearpaid').post(injury.iyearpaid);

    app.route('/ipaystack').post(injury.ipaystack);
    app.route('/ipaidstack').post(injury.ipaidstack);

}
