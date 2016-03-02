
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


exports.birthpayrecord=function(req,res,next){
    console.log('goto get birth endowrecord');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);

    var a="AAE180,SUM(BAB061) pers,SUM(BAB041) comp ";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"aae034",value:ab};
    var tablename="ac64";
    Pag.erecord(a,tablename,condition1,condition2, function(err, data) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!data) {
            console.log('failed get index  data ');
            message='failed get index data';
            return res.json(404,{error:message});
        }
        console.log('sucess to get the birth index detail data');
        return res.json(data);
    });
};

exports.birthpaidrecord=function(req,res,next){
    console.log('goto get endowment paid record');
    /*     //            $http.post('/epaidRecord',{username:user.username,ssn:user.ssn,date:date1,type:$scope.st1.s1.sign})
    var ty=req.body.type;
    var bb=req.body.ssn;
    var a="aae016";
    var condition={name:"aac001",value:bb};
    var tablename="mc11";

    console.log('shengyu sheng he ');
        Pag.gets(a,tablename,condition, function(err, data) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            else{
                console.log('sucess to get the birth  shenhe');
                console.log("birth shenhezhih+++++++++"+data.aae016);
                if(data.aae016==1) {
                 //   select IFNULL((select  sum(amc051)  from mc11  where aac001=00010080210000059821  and  bma001='401' and aae002 like '2010%'),0) yiliao,
                  //      (select IFNULL((select sum(amc051)  from mc11  where aac001=00010080210000059821  and  bma001='402' and aae002 like '2010%'),0)) jintie,
                   //     (select IFNULL((select sum(amc051)  from mc11  where aac001=00010080210000059821  and  bma001='802' and aae002 like '2010%'),0)) qita;

                   */
                    var a=req.body.date;
                    var b=" sum(amc051) ";
                    var c="401";
                    var d=req.body.ssn;
                    var cc="402";
                    var ccc="802";
                    var condition1={name:"aac001",value:d};
                    var condition2={name:"bma001",value:c};
                    var condition22={name:"bma001",value:cc};
                    var condition222={name:"bma001",value:ccc};
                    var condition3={name:"aae002",value:a};
                    var tablename="mc11";

                    Pag.birth(b,tablename,condition1,condition2,condition22,condition222,condition3,function(err,data){
                        if (err) {
                            console.log('something wrong cannot get data++++'+err);
                            return next(err);
                        } else {
                            console.log("zjuminshenhezhi+++++++++"+data);
                            return res.json(data);
                        }
                    });
};

var year=function(a,bb,tablename,condition1,condition2,callback){

    Pag.getyear(a,bb,tablename,condition1,condition2, function(err, data,fields) {
        console.log('enter callback');
        if (err) {
            console.log('something wrong');
            throw err;
        }
        else {
            console.log('sucess to gets data');
            return callback(err,data,fields);
        }
    });
};

exports.byearpay=function(req,res,next){
    console.log('goto get endowment endowrecord');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);
    var a=" distinct left( AAE034, 4)  ";
    var bb="aae034";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"AAE034",value:ab};
    var  tablename=" ac64";

        var birthpayyear=year(a,bb,tablename,condition1,condition2,function(err,data){
            if (err) {
                console.log('something wrong cannot get data++++'+err);
                return next(err);
            } else {
                console.log("zjuminshenhezhi+++++++++"+data);
                return res.json(data);
            }
        });
};
var birthyear=function(a,bb,tablename,condition1,condition2,condition3,callback){

    Pag.getyearpaid(a,bb,tablename,condition1,condition2,condition3,function(err,data,fields) {
        console.log('enter callback');
        if (err) {
            console.log('something wrong');
            throw err;
        }
        else {
            console.log('sucess to gets data');
            return callback(err,data,fields);
        }
    });
};

exports.byearpaid=function(req,res,next){
    console.log('goto get endowment endowrecord aaaaaaaaaa');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);
    var a=" distinct left( AAE002, 4)  AAE002";
    var bb="aae002";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"aae002",value:ab};
    var tablename=" mc11";
    var condition3={name:"null",value:"null"};

        var birthpaidyear=birthyear(a,bb,tablename,condition1,condition2,condition3,function(err,data){
            if (err) {
                console.log('something wrong cannot get data++++'+err);
                return next(err);
            } else {
                console.log("zjuminshenhezhi+++++++++"+data);
                return res.json(data);
            }
        });
};
exports.bpaystack=function(req,res,next){
    console.log('goto get  epaystack');
    var b = req.body.ssn;
    var condition = {name: "aac001", value: b};
        var a = "left(aae034,4) y,sum(bab041) d ,sum(bab061)  g ";
        var tablename = "ac64";
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
exports.bpaidstack=function(req,res,next){
    console.log('goto get  epaystack');
    var b = req.body.ssn;
    var condition = {name: "aac001", value: b};
        var a = "left(aae002,4) y,sum(amc051)  g";
        var tablename = "mc11";
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