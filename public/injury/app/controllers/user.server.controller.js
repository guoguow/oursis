

var Pag = require('../../../../my_modules/pag/app/models/pag.js');


exports.injuryindex=function(req,res,next){
    console.log('goto get injury  index page data');

    var da=req.body.ssn;
    var a="aae034";
    var b="bab061"
    var c="alc072"
    var d="aae002"
    var condition={name:"aac001",value:da};
    var tablename1="ac63";
    var tablename2="lC33";

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
        console.log('sucess to get the injury index detail data');
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
exports.injurypay=function(req,res,next){
    console.log('goto get endowment detail  payhist data');
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var start=(req.body.page-1)*req.body.pageSize;
    var end=req.body.pageSize;
    var a="aae034,aae191,aae180,aaa042,aaa041,bab054,bab055,bab041,bab061,aae013";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae034",value1:startdate,value2:enddate};
    var tablename="ac63";

    var msg=decide(startdate,a,da,condition1,condition2,tablename,start,end,function(err,data){
        if (!data) {
            console.log('something wrong cannot get data ++++++++++++++++');
            return next(err);
        } else {
            return res.json(data);
        }
    });
};
exports.injurypaid=function(req,res,next){
    console.log('goto get injury detail  payhist data');
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var start=(req.body.page-1)*req.body.pageSize;
    var end=req.body.pageSize;
    var a="bla001,alc072,aae002";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae002",value1:startdate,value2:enddate};
    var tablename="lc33";

    var msg=decide(startdate,a,da,condition1,condition2,tablename,start,end,function(err,data){
        if (!data) {
            console.log('something wrong cannot get data ++++++++++++++++');
            return next(err);
        } else {
            return res.json(data);
        }
    });
};

exports.injurypayrecord=function(req,res,next){
    console.log('goto get injury injuryrecord');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);

    var a="AAE180,SUM(BAB061) pers,SUM(BAB041) comp ";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"aae034",value:ab};
    var tablename="ac63";
    Pag.erecord(a,tablename,condition1,condition2, function(err, data) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!data) {
            console.log('failed get index  data ');
            message='failed get index data';
            return res.json(404,{error:message});
        };
        console.log('sucess to get the injury index detail data');
        return res.json(data);
    });
};
exports.injurypaidrecord=function(req,res,next){
    console.log('goto get injury paid record');
                    var a=req.body.date;
                    var d=req.body.ssn;
                    Pag.ipaidRecord(a,d,function(err, data,fields) {
                        console.log('enter callback');
                        if (err) {
                            console.log('something wrong');
                            throw err;
                        }
                        else {
                            console.log('sucess to gets data');
                            return res.json(data);
                        }
                    });

};
exports.injurypaidrecord2=function(req,res,next){
    console.log('goto get injury paid record');
    var a=req.body.date;
    var d=req.body.ssn;
    Pag.ipaidRecord2(a,d,function(err, data,fields) {
        console.log('enter callback');
        if (err) {
            console.log('something wrong');
            throw err;
        }
        else {
            console.log('sucess to gets data');
            return res.json(data);
        }
    });

};
exports.iyearpay=function(req,res,next){

//    var sql = "select "+a+bb+" from " +tablename+" where "+condition1.name+" = '"+condition1.value+"' and " +condition2.name+" < '"+condition2.value+"' ORDER BY "+bb+" DESC ";

    console.log('goto get injury injuryrecord');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);
    var a=" distinct left( AAE034, 4)  ";
    var bb="AAE034";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"aae034",value:ab};
        var tablename=" ac63";
    Pag.getyear(a,bb,tablename,condition1,condition2, function(err, data,fields) {
            console.log('enter callback');
            if (err) {
                console.log('something wrong');
                throw err;
            }
            else {
                console.log('sucess to gets data');
                return res.json(data);
            }
    });

};

exports.iyearpaid=function(req,res,next){
//var sql = "select "+a+bb+" from " +tablename+" where "+condition1.name+" = '"+condition1.value+"' and " +condition2.name+" < '"+condition2.value+"' ORDER BY "+bb+" DESC ";

    var ty=req.body.type;
    console.log('goto get injury injuryrecord aaaaaaaaaa');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);
    var a=" distinct left( aae002, 4)  ";
    var bb="aae002";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"aae002",value:ab};
    var tablename=" lc33";
    Pag.getyear(a,tbb,ablename,condition1,condition2, function(err, data,fields) {
        console.log('enter callback');
        if (err) {
            console.log('something wrong');
            throw err;
        }
        else {
            console.log('sucess to gets data');
            return res.json(data);
        }
    });

};
exports.ipaystack=function(req,res,next){
    console.log('goto get  epaystack');
    var b = req.body.ssn;
    var condition = {name: "aac001", value: b};
    var a = "left(bae014,4) y,sum(bab041)  d,sum(bab061)  g ";
    var tablename = "ac63";
    Pag.gett(a, tablename, condition, function (err, data) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!data) {
            console.log('failed get   data ');
            message = 'failed get index data';
            return res.json(404, {error: message});
        };
        console.log('sucess to get the   ssssssss');
        return res.json(data);
    });

};
exports.ipaidstack=function(req,res,next){
    console.log('goto get  epaystack');
    var b = req.body.ssn;
    var condition = {name: "aac001", value: b};
    var a = "left(aae002,4) y,sum(alc072)  g";
    var tablename = "lc33";
    Pag.gett(a, tablename, condition, function (err, data) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!data) {
            console.log('failed get   data ');
            message = 'failed get index data';
            return res.json(404, {error: message});
        };
        console.log('sucess to get the   ssssssss');
        return res.json(data);
    });

};
