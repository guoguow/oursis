var Pay = require('../../app/models/user.server.model.js'),
    passport = require('passport'),
crypto=require('crypto');
var Pag = require('../../../../my_modules/pag/pag.js');

exports.sethealth=function(req,res,next){
    console.log('goto set signforpay=2 for health ');
    console.log(req.body);
    var statsign="2";
    var tablename="userstat";
    var condition={name:"username",value:req.body.username};

    Pay.setsign(statsign,tablename,condition, function (error) {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            console.log('sucess to set health signstat=2 ok!');
        }
    })
};
exports.getPayment=function(req,res,next){

    console.log('goto get payment  detail data for page');
    console.log(req.body);

    var a=" akb020 yybm,aka120 jbbm,AKC173 zyrq,AKC194 cyrq ";
    var condition=" aac001="+req.body.ssn+" and bka021="+req.body.jylb;
    var condition2 =" ";
    if(req.body.dt1&&req.body.dt2) {
        console.log(req.body.dt1+"++++++++++"+req.body.dt2);
        condition2 = " and  AKC173>'" +req.body.dt1+"' and akc194< '"+req.body.dt2+"' ";
    };
    var tablename="kc01";
    var start=req.body.page*req.body.pageSize;
    var end=req.body.pageSize;
    Pag.get(a,tablename,condition,condition2,start,end,function (err, data) {
        if (!data) {
            message = 'no data.'
            return res.json(403, {error: message});
        };
        if (err) {
            console.log('something wrong');
            return next(err);
        };
        return res.json(data);
    })
};
exports.getAll=function(req,res,next){

    console.log('goto get payment  detail data for page');
    console.log(req.body);
    var condition=" aac001="+req.body.ssn+" and bka021="+req.body.jylb;
    var condition2 =" ";
    if(req.body.dt1&&req.body.dt2) {
        console.log(req.body.dt1+"++++++++++"+req.body.dt2);
        condition2 = " and  AKC173>'" +req.body.dt1+"' and akc194< '"+req.body.dt2+"' ";
    };
    var tablename="kc01";
    Pag.getCount(tablename,condition,condition2, function (err, data) {
        if (!data) {
            message = 'no data.'
            return res.json(403, {error: message});
        };
        if (err) {
            console.log('something wrong');
            return next(err);
        };
        return res.json(data);
    })
};