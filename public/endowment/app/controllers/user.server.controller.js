var Pay = require('../../app/models/user.server.model.js'),
    passport = require('passport'),
crypto=require('crypto');


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

exports.setpaysign=function(req,res,next){
    console.log('goto set orsign=1 for endowment ');
    console.log(req.body);

    var orsign="1";
    var tablename="userstat";
    var condition={name:"username",value:req.body.username};

    Pay.setorsign(orsign,tablename,condition, function (error) {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            console.log('sucess  to set endowment orsign=1 ok!');
        }
    })
};
exports.setpaidsign=function(req,res,next){
    console.log('goto set orsign=0 for endowment ');
    console.log(req.body);

    var orsign="0";
    var tablename="userstat";
    var condition={name:"username",value:req.body.username};

    Pay.setorsign(orsign,tablename,condition, function (error) {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            console.log('sucess  to set endowment orsign=0 ok!');
        }
    })
};
//change by guoguow0915  use function realize
var decide=function(startdate,a,da,condition1,condition2,tablename,callback){
    if(!startdate)
    {
        Pay.getpay(a,tablename,condition1, function(err, data,fields) {
            console.log('enter callback');
            console.log(data);
            if (err) {
                console.log('something wrong');
                throw err;
            }
            if (!data) {
                console.log('sistype not exists');
                message='failed to get endowment detail data'
                return res.json(404,{error:message});
            };
            console.log('sucess to get theendowment detail payhist detail data');
            return callback(err,data,fields);
        });
    }else{
        Pay.getbydate(a,tablename,condition1,condition2, function(err, data,fields) {
            console.log('enter callback');
            console.log(data);
            if (err) {
                console.log('something wrong');
                throw err;
            }
            if (!data) {
                console.log('sistype not exists');
                message='failed to get endowment detail data'
                return res.json(404,{error:message});
            };
            console.log('sucess to get theendowment detail payhist detail data');
            return callback(err,data,fields);
        });
    }
};
exports.endowpay=function(req,res,next){
    console.log('goto get endowment detail  payhist data');
    console.log(req.body);
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="aae034,aae041,aae042,aae191,aae180,aaa042,aaa041,bab054,bab055,bab041,bab061,aae013";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae034",value1:startdate,value2:enddate};
    var tablename="si3.ac60";

    var msg=decide(startdate,a,da,condition1,condition2,tablename,function(err,data){
        console.log(data);
        if (!data) {
            console.log('something wrong cannot get data ++++++++++++++++');
            return next(err);
        } else {
            return res.json(data);
        }
    });
};
exports.jmendowpay=function(req,res,next){
    console.log('goto get endowment detail  payhist data');
    console.log(req.body);
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="aae034,aae041,aae042, bab052,bab051,aae013";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae034",value1:startdate,value2:enddate};
    var tablename="si3.ac65";

    var msg=decide(startdate,a,da,condition1,condition2,tablename,function(err,data){
        console.log(data);
        if (!data) {
            console.log('something wrong cannot get data ++++++++++++++++');
            return next(err);
        } else {
            return res.json(data);
        }
    });
};
//enodowment paid function guoguow
//not finished ,still need decide data?????not konwn yet !!!!!!!!!!!!!!!!!!!!!!!

exports.endowpaid=function(req,res,next){
    console.log('goto get endowment detail  payhist data');
    console.log(req.body);
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="aaa036,aae019,bie011,aae010,aaf034,aae002,aae011,aae036";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae002",value1:startdate,value2:enddate};
    var tablename="ad3.ic17";

    var msg=decide(startdate,a,da,condition1,condition2,tablename,function(err,data){
        console.log(data);
        if (!data) {
            console.log('something wrong cannot get data ++++++++++++++++');
            return next(err);
        } else {
            return res.json(data);
        }
    });
};
exports.endowindex=function(req,res,next){
    console.log('goto get endowment  index page data');
    console.log(req.body);

    //select max(a.AAE034),sum(a.BAB061),je
    //from si3.ac60 a,(select sum(AAE019) je,aac001 from ad3.ic17 where aac001='00010070110000053695') b
    //where a.aac001=b.aac001

    var da=req.body.ssn;
    var a="aae034";
    var b="bab061"
   // var c="aae019"
    var condition={name:"aac001",value:da};
    var tablename1="si3.ac60";
  //  var tablename2="ad3.ic17";

    Pay.getindex(a,b,tablename1,condition, function(err, data) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!data) {
            console.log('failed get index  data ');
            message='failed get index data';
            return res.json(404,{error:message});
        };
        console.log('sucess to get the endowment index detail data');
        return res.json(data);
    });
};
/*
//enodowment payhist creat by gugouow 0910
 exports.endowpay=function(req,res,next){
 console.log('goto get endowment detail  payhist data');
 console.log(req.body);
 var startdate=req.body.dt1;
 var enddate=req.body.dt2;
 var da=req.body.ssn;
 var a="aae034,aae041,aae042,aae191,aae180,aaa042,aaa041,bab054,bab055,bab041,bab061,aae013";
 var condition1={name:"aac001",value:da};
 var condition2={name:"aae034",value1:startdate,value2:enddate};
 var tablename="si3.ac60";

    if(!startdate)
    {
        Pay.getpay(a,tablename,condition1, function(err, data) {
            console.log('enter callback');
            console.log(data);
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            if (!data) {
                console.log('sistype not exists');
                message='failed to get endowment detail data'
                return res.json(404,{error:message});
            };
            console.log('sucess to get theendowment detail payhist detail data');
            return res.json(data);
        });
    }else{
        Pay.getbydate(a,tablename,condition1,condition2, function(err, data) {
            console.log('enter callback');
            console.log(data);
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            if (!data) {
                console.log('sistype not exists');
                message='failed to get endowment detail data'
                return res.json(404,{error:message});
            };
            console.log('sucess to get theendowment detail payhist detail data');
            return res.json(data);
        });
    }

};
*/

