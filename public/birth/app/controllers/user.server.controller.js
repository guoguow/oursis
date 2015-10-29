
var Pag = require('../../../../my_modules/pag/app/models/pag.js');


exports.birthindex=function(req,res,next){
    console.log('goto get injury  index page data');
    console.log(req.body);
    //select max(a.AAE034),sum(a.BAB061),je
    //from si3.ac60 a,(select sum(AAE019) je,aac001 from ad3.ic17 where aac001='00010070110000053695') b
    //where a.aac001=b.aac001

    var da=req.body.ssn;
    var a="aae034";
    var b="bab061"
    var c="amc051"
    var d="aae002"
    var condition={name:"aac001",value:da};
    var tablename1="ac64";
    var tablename2="MC11";

    Pag.getindex(a,b,c,d,tablename1,tablename2,condition, function(err, data) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!data) {
            console.log('failed get index  data ');
            message='failed get index data'
            return res.json(404,{error:message});
        };
        console.log('sucess to get the birth index detail data');
        return res.json(data);
    });
};


var decide=function(startdate,a,da,condition1,condition2,tablename,start,end,callback){
    if(!startdate)
    {
        Pag.getpay(a, tablename, condition1, start, end, function (err, data, fields) {
            console.log('enter callback');
            if (err) {
                console.log('something wrong');
                throw err;
            }
            if (!data) {
                console.log('sistype not exists');
                message = 'failed to get birth detail data'
                return res.json(404, {error: message});
            }
            ;
            console.log('sucess to get the  birth detail payhist detail data');
            return callback(err, data, fields);
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
                message='failed to get birth detail data'
                return res.json(404,{error:message});
            };
            console.log('sucess to get birth detail payhist detail data');
            return callback(err,data,fields);
        });
    }
};
exports.birthpay=function(req,res,next){
    console.log('goto get birth detail  payhist data');
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="aae034,aae191,aae180,aaa042,aaa041,bab054,bab055,bab041,bab061,aae013";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae034",value1:startdate,value2:enddate};
    var tablename="ac64";
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
exports.birthpaid=function(req,res,next){
    console.log('goto get birth detail  payhist data');
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="bma001,amc051,aae002";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae002",value1:startdate,value2:enddate};
    var tablename="MC11";
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