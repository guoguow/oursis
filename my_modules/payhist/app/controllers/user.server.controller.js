var Pay = require('../../app/models/user.server.model.js'),
    passport = require('passport'),
crypto=require('crypto');


exports.pay=function(req,res,next){

    console.log('goto get payhist  detail data for page');
    console.log(req.body);
    console.log(req.body);

        var a="statsign";
        var condition={name:"username",value:req.body.username};
        var tablename="userstat";
    Pay.get(a,tablename,condition, function (err, stat) {
            if (!stat) {
                message = 'signstat not in payHist.'
                return res.json(403, {error: message});
            };
            if (err) {
                console.log('something wrong');
                return next(err);
            };
            console.log(stat);

            var a="sign,kind,value1,value2,value3,value4,value5,value6,value7,value8";
            var condition={name:"sign",value:stat.statsign};
            var tablename="paydata";
        Pay.getpay(a,tablename,condition, function(err, data) {
                console.log('enter callback');
                console.log(data);
                if (err) {
                    console.log('something wrong');
                    return next(err);
                }
                if (!data) {
                    console.log('sistype not exists 999999999999');
                    message='sistype does not exists999999999'
                    return res.json(404,{error:message});
                };
                console.log('sucess to get the payhist detail data99999999');
                return res.json(data);
            });
            console.log('end of payhist choose');
        })
};
/*
exports.reset=function(req,res,next){
    console.log('goto reset signforpay in paydata');
    console.log(req.body);

        Pay.update(function (error) {
            if (error) {
                return next(error);
                console.log(error);
            } else {
                console.log('reset ok!');
            }
        })
};

exports.setendow=function(req,res,next){
    console.log('goto set signforpay=1 for endowment ');
    console.log(req.body);

    var statsign="1";
    var tablename="userstat";
    var condition={name:"username",value:req.body.username};

    Pay.setsign(statsign,tablename,condition, function (error) {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            console.log('sucess  to set endowment signstat=1 ok!');
        }
    })
};
 exports.sethealth=function(req,res,next){
 console.log('goto set signforpay=2 for health ');
 console.log(req.body);
 var statsign="2";
 var tablename="userstat";
 var condition={name:"username",value:req.body.username};

 Pay.setsign(statsign,tablename,condition, function (error) {
 if (error) {
 return next(error);
 console.log(error);
 } else {
 console.log('sucess to set health signstat=2 ok!');
 }
 })
 };
 */
