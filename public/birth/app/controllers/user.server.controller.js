var Pay = require('../../app/models/user.server.model.js'),
    passport = require('passport'),
crypto=require('crypto');


exports.setbirth=function(req,res,next){
    console.log('goto set signforpay=3 for birth ');
    console.log(req.body);
    var statsign="3";
    var tablename="userstat";
    var condition={name:"username",value:req.body.username};

    Pay.setsign(statsign,tablename,condition, function (error) {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            console.log('sucess to set birth signstat=3 ok!');
        }
    })
};