var Pay = require('../../app/models/user.server.model.js'),
    passport = require('passport'),
crypto=require('crypto');


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
                message='failed to get healthment detail data'
                return res.json(404,{error:message});
            };
            console.log('sucess to get thehealthment detail payhist detail data');
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
                message='failed to get healthment detail data'
                return res.json(404,{error:message});
            };
            console.log('sucess to get thehealthment detail payhist detail data');
            return callback(err,data,fields);
        });
    }
};
exports.healthpay=function(req,res,next){
    console.log('goto get healthment detail  payhist data');
    console.log(req.body);
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="aae034,bac039,aae041,aae042,aae191,aae180,aaa042,aaa041,bab054,bab055,bab041,bab061,aae013";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae034",value1:startdate,value2:enddate};
    var tablename="ac61";

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
exports.jmhealthpay=function(req,res,next){
    console.log('goto get healthment detail  payhist data');
    console.log(req.body);
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="aae034,aae041,aae042, bab052,bab051,aae013";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae034",value1:startdate,value2:enddate};
    var tablename="ac65";

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
//change by guoguow0915  use function realize
var decidepaid=function(startdate,aa,bb,da,condition1,condition2,condition3,tablename1,tablename2,callback){
    if(!startdate)
    {
        Pay.getpaid(aa,bb,tablename1,tablename2,condition1,condition3, function(err, data,fields) {
            console.log('enter callback');
            console.log(data);
            if (err) {
                console.log('something wrong');
                throw err;
            }
            if (!data) {
                console.log('sistype not exists');
                message='failed to get healthment detail data'
                return res.json(404,{error:message});
            };
            console.log('sucess to get thehealthment detail payhist detail data');
            return callback(err,data,fields);
        });
    }else{
        Pay.getpaidbydate(aa,bb,tablename1,tablename2,condition1,condition2,condition3,  function(err, data,fields) {
            console.log('enter callback');
            console.log(data);
            if (err) {
                console.log('something wrong');
                throw err;
            }
            if (!data) {
                console.log('sistype not exists');
                message='failed to get healthment detail data'
                return res.json(404,{error:message});
            };
            console.log('sucess to get thehealthment detail payhist detail data');
            return callback(err,data,fields);
        });
    }
};
//health  paid function guoguow    qufen
exports.healthpaid01=function(req,res,next){
    console.log('goto get healthment detail  payhist data1111111111');
    console.log(req.body);
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var aa="a.akc173,a.bke003,b.bkc018,b.aka130,b.akc264,b.akc263";
    var bb="bkc018,aka130,akc264,akc263";
    var condition1={name:"aac001",value:da};
    var condition2={name:"akc173",value1:startdate,value2:enddate};
    var condition3={name:"aka130",value:6};
//select a.akc173,a.bke003,b.bkc018,b.aka130,b.akc264,b.akc263 from sis.kc01 a,(select bkc018,aka130,akc264,akc263 from sis.kc02 b  where aac001 ='00010072110000057117' and b.aka130="1" ) b where a.aac001 = 00010072110000057117 and a.aka130="1";

    var tablename1="sis.kc01";
    var tablename2="sis.kc02";
    var msg=decidepaid(startdate,aa,bb,da,condition1,condition2,condition3,tablename1,tablename2,function(err,data){
        console.log(data);
        if (!data) {
            console.log('something wrong cannot get data ++++++++++++++++');
            return next(err);
        } else {
            return res.json(data);
        }
    });
};
exports.healthpaid02=function(req,res,next){
    console.log('goto get healthment detail  payhist data22222222222');
    console.log(req.body);
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var aa="a.akb020,a.akc173,a.akc194,a.bke003,b.aka130,b.akc264,b.akc263";
    var bb="aka130,akc264,akc263";
    var condition1={name:"aac001",value:da};
    var condition2={name:"akc173",value1:startdate,value2:enddate};
    var condition3={name:"aka130",value:1};

    var tablename1="sis.kc01";
    var tablename2="sis.kc02";
    var msg=decidepaid(startdate,aa,bb,da,condition1,condition2,condition3,tablename1,tablename2,function(err,data){
        console.log(data);
        if (!data) {
            console.log('something wrong cannot get data ++++++++++++++++');
            return next(err);
        } else {
            return res.json(data);
        }
    });
};
exports.healthpaid03=function(req,res,next){
    console.log('goto get healthment detail  payhist data33333333333');
    console.log(req.body);
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var aa="a.akc173,a.bke003,b.bkc018,b.aka130,b.akc264,b.akc263";
    var bb="bkc018,aka130,akc264,akc263";
    var condition1={name:"aac001",value:da};
    var condition2={name:"akc173",value1:startdate,value2:enddate};
    var condition3={name:"aka130",value:2};
//select a.akc173,a.bke003,b.bkc018,b.aka130,b.akc264,b.akc263 from sis.kc01 a,(select bkc018,aka130,akc264,akc263 from sis.kc02 b  where aac001 ='00010072110000057117' and b.aka130="1" ) b where a.aac001 = 00010072110000057117 and a.aka130="1";

    var tablename1="sis.kc01";
    var tablename2="sis.kc02";
    var msg=decidepaid(startdate,aa,bb,da,condition1,condition2,condition3,tablename1,tablename2,function(err,data){
        console.log(data);
        if (!data) {
            console.log('something wrong cannot get data ++++++++++++++++');
            return next(err);
        } else {
            return res.json(data);
        }
    });
};


exports.healthindex=function(req,res,next){
    console.log('goto get healthment  index page data');
    console.log(req.body);
    var da=req.body.ssn;
    var a="aae034";
    var b="bab061"
    var condition={name:"aac001",value:da};
    var tablename1="ac60";
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
        console.log('sucess to get the healthment index detail data');
        return res.json(data);
    });
};

