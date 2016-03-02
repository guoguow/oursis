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

exports.eaccye=function(req,res,next){
    console.log('goto get endowment  index page data');
    console.log(req.body);
     var data,data1,data2,data3;
    var da=req.body.ssn;
    var date=req.body.date;
    var ty=req.body.type;
    if(ty==1)
    {//zhigong
        var a=" ifnull(aae262,0)+ifnull(aae263,0)+ifnull(aae264,0)+ifnull(aae265,0)+ifnull(bac032,0) +ifnull(bac036,0) yue ";
        var condition1={name:"aac001",value:da};
        var dd="aae001";
        var tablename="ic02";
        Pag.zaccyue1(a,tablename,condition1,dd,function(err, data1) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            if (!data1) {
                console.log(' data1111 is null ');
               data1={"yue":"0"};
            }
            if (!data1.yue) {
                console.log(' data222222 is null ');
                data1={"yue":"0"};
            }
            var aa=" sum(ifnull(aae081,0)+ifnull(aae083,0)+ifnull(bac033,0)+ifnull(bac037,0)) yue ";
            var condition11={name:"aac001",value:da};
            var condition22={name:"bae014",value:date};
            var tablename11="ic42";
            Pag.zaccyue11(aa,tablename11,condition11,condition22,function(err, data2) {
                if (err) {
                    console.log('something wrong');
                    return next(err);
                }
                if (!data2) {
                    console.log(' data222222 is null ');
                      data2={"yue":"0"};
                }
//存在data2『yue ：null的情况』？？？？？数据问题
                if (!data2.yue) {
                    console.log(' data222222 is null ');
                    data2={"yue":"0"};
                }
                aa="sum(ifnull(aae081,0)+ifnull(aae083,0)) yue ";
                tablename11="ic01";
                Pag.zaccyue11(aa,tablename11,condition11,condition22,function(err, data3) {
                    if (err) {
                        console.log('something wrong');
                        return next(err);
                    }
                    if (!data3) {
                        console.log(' data333333 is null ');
                          data3={"yue":'0'};
                    }
                    if (!data3.yue) {
                        console.log(' data333333 is null ');
                        data3={"yue":"0"};
                    }
                      console.log(data3.yue);


                var data={s1:data1,s2:data2,s3:data3};
                    console.log(data);
                var accyue=parseInt(data.s1.yue)+parseInt(data.s2.yue)+parseInt(data.s3.yue);

                console.log('sucess to get the endowment cunrrent yue is ++++++'+accyue);
                    return res.json(accyue);

                });
            });
        });



    }
else
    {   //jumin
        var a=" ifnull(bab063,0) yue  ";
        var condition1={name:"aac001",value:da};
        var dd="aae001";
        var tablename="nc33";
        Pag.zaccyue1(a,tablename,condition1,dd,function(err, data1) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            if (!data1) {
                console.log(' data1111 is null ');
                data1={"yue":"0"};
            }
            if (!data1.yue) {
                console.log(' data222222 is null ');
                data1={"yue":"0"};
            }
            var aa=" sum(ifnull(bab063,0)+ifnull(aae387,0)) yue ";
            var condition11={name:"aac001",value:da};
            var condition22={name:"bae014",value:date};
            var tablename11="nc37";
            Pag.zaccyue11(aa,tablename11,condition11,condition22,function(err, data2) {
                if (err) {
                    console.log('something wrong');
                    return next(err);
                }
                if (!data2) {
                    console.log(' data222222 is null ');
                    data2={"yue":"0"};
                }
//存在data2『yue ：null的情况』？？？？？数据问题
                if (!data2.yue) {
                    console.log(' data222222 is null ');
                    data2={"yue":"0"};
                }
                aa=" sum(ifnull(bab063,0)) yue  ";
                tablename11="nc31";
                Pag.zaccyue11(aa,tablename11,condition11,condition22,function(err, data3) {
                    if (err) {
                        console.log('something wrong');
                        return next(err);
                    }
                    if (!data3) {
                        console.log(' data333333 is null ');
                        data3={"yue":'0'};
                    }
                    if (!data3.yue) {
                        console.log(' data333333 is null ');
                        data3={"yue":"0"};
                    }
                    console.log(data3.yue);


                    var data={s1:data1,s2:data2,s3:data3};
                    console.log(data);
                    var accyue=parseInt(data.s1.yue)+parseInt(data.s2.yue)+parseInt(data.s3.yue);

                    console.log('sucess to get the endowment cunrrent yue is ++++++'+accyue);
                    return res.json(accyue);

                });
            });
        });



    }



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


exports.endowpayrecord=function(req,res,next){
    console.log('goto get endowment endowrecord');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);
var ty=req.body.type;
    if(ty=1){
        var a="AAE180,SUM(BAB061) pers,SUM(BAB041) comp ";
        var condition1={name:"aac001",value:aa};
        var condition2={name:"aae034",value:ab};
        var tablename="ac60";
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
            console.log('sucess to get the endowment index detail data');
            return res.json(data);
        });

    }
    else{
        var a="bab052,bab051 ";
        var cc="110"
        var condition1={name:"aac001",value:aa};
        var condition2={name:"aae034",value:ab};
        var condition3={name:"aae140",value:cc};
        var tablename="ac65";
        Pag.jpayrecord(a,tablename,condition1,condition2,condition3, function(err, data) {
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
    }

};

exports.endowpaidrecord=function(req,res,next){
    console.log('goto get endowment paid record');
    //            $http.post('/epaidRecord',{username:user.username,ssn:user.ssn,date:date1,type:$scope.st1.s1.sign})
    var ty=req.body.type;
    var bb=req.body.ssn;
    var a="aae016";
    var condition={name:"aac001",value:bb};
    var tablename="ic03";

    if(ty==1)
    {
        //zhigong
        console.log('zhigong yijing tui xiu ,shenhebiaoshi??');
        Pag.gets(a,tablename,condition, function(err, data) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            else{
                console.log('sucess to get the endowment zhihong shenhe');
                console.log("zhigongshenhezhih+++++++++"+data.aae016);
                if(data.aae016==1) {
                     //select IFNULL((select aae019 jiben from ic11  where aac001=10113012510002373504  and  aaa036= 'A180' and aae041 like '2013%'),0) yue,
                    // (select IFNULL((select aae019 jiben from ic11  where aac001=10113012510002373504  and  aaa036= 'A111' and aae041 like '2013%'),0)) jiben;
                    var a=req.body.date;
                    var b="aae019";
                    var c="A111";
                    var d=req.body.ssn;
                    var cc="A180"
                    var condition1={name:"aac001",value:d};
                    var condition2={name:"aaa036",value:c};
                    var condition3={name:"aae041",value:a};
                    var condition4={name:"aae041",value:cc};
                    var tablename="ic11";

                    var zhigong=yanglaojin(b,tablename,condition1,condition2,condition3,condition4,function(err,data){
                      if (err) {
                          console.log('something wrong cannot get data ++++++++++++++++'+err);
                          return next(err);
                      } else {
                          console.log("zhigongshenhezhi+++++++++"+data);
                          return res.json(data);
                      }
                  });
              }
                else{
                  message='zhi gong sheng he wei tong guo ';
                  return res.json(404,{error:message});
                }
            }
        });
    }
    else
    {
        //ty=11 juming
        console.log('jumin yijing tui xiu');
        Pag.gets(a,tablename,condition, function(err, data) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            else{
                console.log('sucess to get the endowment zhihong shenhe');
                console.log("jumin shenhezhih+++++++++"+data.aae016);
                if(data.aae016==1) {
                    //select IFNULL((select aae019 jiben from ic11  where aac001=10113012510002373504  and  aaa036= 'A180' and aae041 like '2013%'),0) yue,
                    // (select IFNULL((select aae019 jiben from ic11  where aac001=10113012510002373504  and  aaa036= 'A111' and aae041 like '2013%'),0)) jiben;
                    var a=req.body.date;
                    var b="aae019";
                    var c="C300";
                    var d=req.body.ssn;
                    var cc="C101";
                    var condition1={name:"aac001",value:d};
                    var condition2={name:"aaa036",value:c};
                    var condition3={name:"aae041",value:a};
                    var condition4={name:"aae041",value:cc};
                    var tablename="ic11";

                    var jumin=yanglaojin(b,tablename,condition1,condition2,condition3,condition4,function(err,data){
                        if (err) {
                            console.log('something wrong cannot get data++++'+err);
                            return next(err);
                        } else {
                            console.log("zjuminshenhezhi+++++++++"+data);
                            return res.json(data);
                        }
                    });
                }
                else{
                    message='zhi gong sheng he wei tong guo ';
                    return res.json(404,{error:message});
                }
            }
        });


    }
};

var yanglaojin=function(b,tablename,condition1,condition2,condition3,condition4,callback){
//select IFNULL((select aae019 jiben from ic11  where aac001=10113012510002373504  and  aaa036= 'A180' and aae041 like '2013%'),0) yue,
   // (select IFNULL((select aae019 jiben from ic11  where aac001=10113012510002373504  and  aaa036= 'A111' and aae041 like '2013%'),0)) jiben;


        Pag.paidrecord(b,tablename,condition1,condition2,condition3,condition4,function(err, data,fields) {
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


exports.endowaccrecord=function(req,res,next){
    console.log('goto get endowment endowrecord');
    var aa=req.body.ssn;
    var ab=req.body.date;
    var ty=req.body.type;
    console.log(ab);

    if(ty==1)
    {
        var a="a.bac036 pass,a.aae264 nps,a.aae265 nrate,a.bac036+a.aae264+a.aae265-b.jiben new,b.jiben";
        var bb="aae019  jiben ";
        var condition1={name:"aac001",value:aa};
        var condition2={name:"aae001",value:ab};
        var condition3={name:"aae041",value:ab};
        var tablename="ic02";
        var tablename1="ic11";
        Pag.eaccrecord(a,bb,tablename,tablename1,condition1,condition2, condition3,function(err, data) {
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
    }else {
        //select a.bab063 pass,a.aae387 nrate,b.jiben from
//  (select  ifnull((select aae019  jiben   from ic11 a where aac001 = '10213101510005302120'  and aae041 like '2013%' ),0) jiben)b, nc33 a where  aac001 = '10213101510005302120'  and aae001 = '2013'

        var a="a.bab063 pass,a.aae387 nrate,b.jiben";
        var bb="aae019";
        var condition1={name:"aac001",value:aa};
        var condition2={name:"aae001",value:ab};
        var condition3={name:"aae041",value:ab};
        var tablename="nc33";
        var tablename1="ic11";
        Pag.ejaccrecord(a,bb,tablename,tablename1,condition1,condition2, condition3,function(err, data) {
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
    }

};
exports.eyearpay=function(req,res,next){

    var ty=req.body.type;
    console.log('goto get endowment endowrecord');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);
    var a=" distinct left( AAE034, 4)  ";
    var bb="aae034";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"aae034",value:ab};
    if(ty==1){

        var tablename=" ac60";
        var zhipay=year(a,bb,tablename,condition1,condition2,function(err,data){
            if (err) {
                console.log('something wrong cannot get data++++'+err);
                return next(err);
            } else {
                console.log("zjuminshenhezhi+++++++++"+data);
                return res.json(data);
            }
        });
    }
    else{
         tablename=" ac65";

        var jupay=year(a,bb,tablename,condition1,condition2,function(err,data){
            if (err) {
                console.log('something wrong cannot get data++++'+err);
                return next(err);
            } else {
                console.log("zjuminshenhezhi+++++++++"+data);
                return res.json(data);
            }
        });
    }
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
exports.eyearpaid=function(req,res,next){

    var ty=req.body.type;
    console.log('goto get endowment endowrecord aaaaaaaaaa');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);
    var a=" distinct left( AAE041, 4)  ";
    var bb="aae041";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"aae041",value:ab};
    var tablename=" ic11";

    if(ty==1){
    //select   distinct left( AAE041, 4)  aae041 from ic11 where aac001 =20615072410008424449 and  aae140="101"  and aae041 >'2011' ORDER BY aae041 asc
    var condition3={name:"aae140",value:"101"};
    var zhipaid=yearpaid(a,bb,tablename,condition1,condition2,condition3,function(err,data){
        if (err) {
            console.log('something wrong cannot get data++++'+err);
            return next(err);
        } else {
            console.log("zjuminshenhezhi+++++++++"+data);
            return res.json(data);
        }
    });
}
else{
        var condition3={name:"aae140",value:"110"};
        var jupaid=yearpaid(a,bb,tablename,condition1,condition2,condition3,function(err,data){
            if (err) {
                console.log('something wrong cannot get data++++'+err);
                return next(err);
            } else {
                console.log("zjuminshenhezhi+++++++++"+data);
                return res.json(data);
            }
        });
}

};
var yearpaid=function(a,bb,tablename,condition1,condition2,condition3,callback){

    Pag.getyearpaid(a,bb,tablename,condition1,condition2,condition3, function(err, data,fields) {
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

exports.status=function(req,res,next){
    console.log('goto get endowment endowrecord');
    var b=req.body.ssn;
    var a="aac008";
    var condition={name:"aac001",value:b};
    var tablename="ac21";
    Pag.gets(a,tablename,condition, function(err, data) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!data) {
            console.log('failed get   data ');
            message='failed get index data';
            return res.json(404,{error:message});
        };
        console.log('sucess to get the endowment zaizhi status');
        return res.json(data);
    });
};
exports.epaystack=function(req,res,next){
    console.log('goto get endowment epaystack');
    var ty=req.body.type;
    var b = req.body.ssn;
    var condition = {name: "aac001", value: b};
    if(ty==1) {
        var a = "left(bae014,4) y,sum(bab041)  g,sum(bab061)  d ";
        var tablename = "ac60";
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
            console.log('sucess to get the endowment  ssssssss');
            return res.json(data);
        });
    }
    else{
         a = "left(aae034,4) y,sum(bab052)  g,sum(bac055)  d ";
         tablename = "ac65";
        Pag.gett(a, tablename, condition, function (err, data) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            if (!data) {
                console.log('failed get   data ');
                message = 'failed get index data';
                return res.json(404, {error: message});
            }
            ;
            console.log('sucess to get the endowment  ttttttttttttt');
            return res.json(data);
        });
    }
};
exports.epaidstack=function(req,res,next){
    console.log('goto get endowment epaystack');
    var ty=req.body.type;
    var b = req.body.ssn;
    var condition = {name: "aac001", value: b};
    if(ty==1) {
        var a = "left(aae149,4) y,sum(aae019)  g";
        var tablename = "ic17";
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
            console.log('sucess to get the endowment  ssssssss');
            return res.json(data);
        });
    }
    else{
        a = "left(aae041,4) y,sum(aae019)  g ";
        tablename = "ic11";
        Pag.gett(a, tablename, condition, function (err, data) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            if (!data) {
                console.log('failed get   data ');
                message = 'failed get index data';
                return res.json(404, {error: message});
            }
            ;
            console.log('sucess to get the endowment  ttttttttttttt');
            return res.json(data);
        });
    }
};