var Pag = require('../../../../my_modules/pag/app/models/pag.js');



//change by guoguow0915  use function realize
var decide=function(startdate,a,da,condition1,condition2,tablename,start,end,callback){
    if(!startdate)
    {
        Pag.getpay(a,tablename,condition1, start,end,function(err, data,fields) {
            console.log('enter callback');
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
        Pag.getbydate(a,tablename,condition1,condition2,start,end, function(err, data,fields) {
            console.log('enter callback');
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
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="aae034,aae041,aae042,aae191,aae180,aaa042,aaa041,bab054,bab055,bab041,bab061,aae013";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae034",value1:startdate,value2:enddate};
    var tablename="ac60";
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
exports.jmendowpay=function(req,res,next){
    console.log('goto get endowment detail  payhist data');
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
//enodowment paid function guoguow
exports.endowpaid=function(req,res,next){
    console.log('goto get endowment detail  payhist data');
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="aaa036,aae019,bie011,aae010,aaf034,aae002,aae011,aae036";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae002",value1:startdate,value2:enddate};
    var tablename="ic17";
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
exports.jmendowpaid=function(req,res,next){
    console.log('goto get endowment detail  payhist data');
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="aaa036,aae019,aae041,aae042";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae041",value1:startdate,value2:enddate};
    var tablename="ic11";
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
exports.endowindex=function(req,res,next){
    console.log('goto get endowment  index page data');
    var da=req.body.ssn;
    var a="aae034";
    var b="bab061";
    var c="AAE019";
    var d="aae002";
    var condition={name:"aac001",value:da};
    var tablename1="ac60";
    var tablename2="ic17"
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
        console.log('sucess to get the endowment index detail data');
        return res.json(data);
    });
};
exports.endowindex2=function(req,res,next){
    console.log('goto get endowment  index page data');
    var da=req.body.ssn;
    var a="aae034";
    var b="BAB051";
    var c="AAE019";
    var d="aae002";
    var condition={name:"aac001",value:da};
    var tablename1="ac65";
    var tablename2="ic17"
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
        console.log('sucess to get the endowment index detail data');
        return res.json(data);
    });
};

exports.endowincome=function(req,res,next){
    console.log('goto get endowment income');
    var da=req.body.ssn;
    var a="bae014 rq,(AAE264+AAE265+AIC104) je ";
    var condition={name:"aac001",value:da};
    var tablename="ic02";
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

exports.endowexp=function(req,res,next){
    console.log('goto get endowment exp');
    var da=req.body.ssn;
    var a="AAE041 rq,AAE019 je ";
    var condition={name:"aac001",value:da};
    var tablename="ic11";
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


