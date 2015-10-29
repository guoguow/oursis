var Pag = require('../../../../my_modules/pag/app/models/pag.js');


//change by guoguow0915  use function realize
var decide=function(startdate,a,da,condition1,condition2,tablename,start,end,callback){
    if(!startdate)
    {
        Pag.getpay(a,tablename,condition1,start,end, function(err, data,fields) {
            console.log('enter callback');
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
        Pag.getbydate(a,tablename,condition1,condition2,start,end, function(err, data,fields) {
            console.log('enter callback');
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
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="aae034,aae191,aae180,aaa042,aaa041,bab054,bab055,bab041,bab061,aae013";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae034",value1:startdate,value2:enddate};
    var tablename="ac61";
    var start=(req.body.page-1)*req.body.pageSize;
    var end=req.body.pageSize;
    var msg=decide(startdate,a,da,condition1,condition2,tablename,start,end,function(err,data){
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
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="aae034,aae041,aae042, bab052,bab051,aae013";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae034",value1:startdate,value2:enddate};
    var tablename="ac65";
    var start=(req.body.page-1)*req.body.pageSize;
    var end=req.body.pageSize;
    var msg=decide(startdate,a,da,condition1,condition2,tablename,start,end,function(err,data){
        if (!data) {
            console.log('something wrong cannot get data ++++++++++++++++');
            return next(err);
        } else {
            return res.json(data);
        }
    });
};
//change by guoguow0915  use function realize
var decidepaid=function(startdate,aa,bb,da,condition1,condition2,condition3,tablename1,tablename2,start,end,callback){
    if(!startdate)
    {
        Pag.getpaid(aa,bb,tablename1,tablename2,condition1,condition3,start,end, function(err, data,fields) {
            console.log('enter callback');
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
        Pag.getpaidbydate(aa,bb,tablename1,tablename2,condition1,condition2,condition3, start,end, function(err, data,fields) {
            console.log('enter callback');
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
exports.healthpaid=function(req,res,next){
    console.log('goto get healthment detail  payhist data1111111111');
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var aa="a.akc173,a.bke003,b.bkc018,b.aka130,b.akc264,b.akc263";
    var bb="bkc018,aka130,akc264,akc263";
    var condition1={name:"aac001",value:da};
    var condition2={name:"akc173",value1:startdate,value2:enddate};
    var condition3={name:"aka130",value:req.body.bz};
    var start=(req.body.page-1)*req.body.pageSize;
    var end=req.body.pageSize;
    var tablename1="sis.kc01";
    var tablename2="sis.kc02";
    var msg=decidepaid(startdate,aa,bb,da,condition1,condition2,condition3,tablename1,tablename2,start,end,function(err,data){
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
    var da=req.body.ssn;
    var a="aae034";
    var b="BAB061";
    var c="BKC104";
    var d="AAE040";
    var condition={name:"aac001",value:da};
    var tablename1="ac61";
    var tablename2="kc02";
    Pag.getindex(a,b,c,d,tablename1,tablename2,condition, function(err, data) {
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
exports.healthindex2=function(req,res,next){
    console.log('goto get healthment  index page data');
    var da=req.body.ssn;
    var a="aae034";
    var b="BAB051";
    var c="BKC104";
    var d="AAE040";
    var condition={name:"aac001",value:da};
    var tablename1="ac65";
    var tablename2="kc02";
    Pag.getindex(a,b,c,d,tablename1,tablename2,condition, function(err, data) {
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
exports.healthincome=function(req,res,next){
    console.log('goto get endowment income');
    var da=req.body.ssn;
    var a="BAE014 rq,AAE083 je ";
    var condition={name:"aac001",value:da};
    var tablename="kc96";
    var start=(req.body.page-1)*req.body.pageSize;
    var end=req.body.pageSize;
    Pag.get(a,tablename,condition,start,end, function(err, data) {
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

exports.healthexp=function(req,res,next){
    console.log('goto get endowment exp');
    var da=req.body.ssn;
    var a="AAE040 rq,BKC104 je ";
    var condition={name:"aac001",value:da};
    var tablename="kc02";
    var start=(req.body.page-1)*req.body.pageSize;
    var end=req.body.pageSize;
    Pag.get(a,tablename,condition,start,end, function(err, data) {
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

