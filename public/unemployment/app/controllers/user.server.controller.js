
var Pag = require('../../../../my_modules/pag/app/models/pag.js');

exports.getidcard=function(req,res,next){

    var da=req.body.ssn;
    var a="aac002";
    var condition={name:"aac001",value:da};
    var tablename="ac21";

    Pag.get(a,tablename,condition,0,1,function(err, data) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!data) {
            return res.json(404,{error:message});
        };
        return res.json(data[0]);
    });
};


exports.unemploymentindex=function(req,res,next){
    console.log('goto get unemployment  index page data');


    var da=req.body.ssn;
    var a="aae034";
    var b="bab061"
    var c="ajc140"
    var d="aae149"
    var condition={name:"aac001",value:da};
    var tablename1="ac62";
    var tablename2="JC37";

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

exports.unemploymentpay=function(req,res,next){
    console.log('goto get unemployment detail  payhist data');
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="aae034,aae191,aae180,aaa042,aaa041,bab054,bab055,bab041,bab061,aae013";
    var condition1={name:"aac001",value:da};
    var condition2={name:"aae034",value1:startdate,value2:enddate};
    var tablename="ac62";
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
exports.unemploymentpaid=function(req,res,next){
    console.log('goto get unemployment detail  payhist data');
    var startdate=req.body.dt1;
    var enddate=req.body.dt2;
    var da=req.body.ssn;
    var a="aaz350,ajc140,aae149";
    var condition1={name:"aac001",value:da};
    var condition2={name:"AAE149",value1:startdate,value2:enddate};
    var tablename="JC37";
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


exports.upayrecord=function(req,res,next){
    console.log('goto get unemployment unemploymentrecord');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);

    var a="AAE180,SUM(BAB061) pers,SUM(BAB041) comp ";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"aae034",value:ab};
    var tablename="ac62";
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
        console.log('sucess to get the unemployment index detail data');
        return res.json(data[0]);
    });
};
exports.upaidrecordCount=function(req,res,next){
    console.log('goto get unemployment paid record');
    var a=" distinct AJC090,ACC020 "
    var ab=req.body.date;
    var aa=req.body.ssn;
    var condition1={name:"aac001",value:aa};
    var condition2={name:"AJC090",value:ab};
    var tablename="cc02";

    Pag.erecord(a,tablename,condition1,condition2, function(err, data) {
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
exports.upaidrecord=function(req,res,next){
    console.log('goto get unemployment paid record');
    var ab=req.body.date;
    var aa=req.body.ssn;
    var ac=req.body.aac020;
    var a="AJC055,AAE043,AJC097,AJA100,AJC099,BJC10P";
    var tablename="jc10";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"aac020",value:ac};
    Pag.eaccrecord(a,tablename,condition1,condition2,function(err, data,fields) {
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

exports.uyearpay=function(req,res,next){


    console.log('goto get unemployment injuryrecord');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);
    var a=" distinct left( AAE034, 4)  ";
    var bb="AAE034"
    var condition1={name:"aac001",value:aa};
    var condition2={name:"aae034",value:ab};
    var tablename=" ac62";
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

exports.uyearpaid=function(req,res,next){

    var ty=req.body.type;
    console.log('goto get unemployment unemploymentrecord aaaaaaaaaa');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);
    var a=" distinct left( AJC090, 4)  ";
    var bb="AJC090";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"AJC090",value:ab};
    var tablename=" cc02";
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

exports.unpaystack=function(req,res,next){
    console.log('goto get  epaystack');
    var b = req.body.ssn;
    var condition = {name: "aac001", value: b};
    var a = "left(bae014,4) y,sum(bab041)  d,sum(bab061)  g ";
    var tablename = "ac62";
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
exports.unpaidstack=function(req,res,next){
    console.log('goto get  epaystack');
    var b = req.body.ssn;
    var condition = {name: "aac001", value: b};
    var a = "left(aae149,4) y,sum(ajc140)  g";
    var tablename = "jc37";
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