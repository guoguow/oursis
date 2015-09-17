var Pay = require('../../app/models/user.server.model.js'),
    passport = require('passport'),
crypto=require('crypto');


exports.setinjury=function(req,res,next){
    console.log('goto set signforpay=3 for Injury ');
    console.log(req.body);
    var statsign="4";
    var tablename="userstat";
    var condition={name:"username",value:req.body.username};

    Pay.setsign(statsign,tablename,condition, function (error) {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            console.log('sucess to set Injury signstat=4 ok!');
        }
    })
};