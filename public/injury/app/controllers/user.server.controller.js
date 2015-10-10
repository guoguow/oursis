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
exports.injuryindex=function(req,res,next){
    console.log('goto get injury  index page data');
    console.log(req.body);
    //select max(a.AAE034),sum(a.BAB061),je
    //from si3.ac60 a,(select sum(AAE019) je,aac001 from ad3.ic17 where aac001='00010070110000053695') b
    //where a.aac001=b.aac001

    var da=req.body.ssn;
    var a="aae034";
    var b="bab061"
    var c="alc072"
    var condition={name:"aac001",value:da};
    var tablename1="ac63";
    var tablename2="lC33";

    Pay.getindex(a,b,c,tablename1,tablename2,condition, function(err, data) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!data) {
            console.log('failed get index  data ');
            message='failed get index data'
            return res.json(404,{error:message});
        };
        console.log('sucess to get the injury index detail data');
        return res.json(data);
    });
};