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
    var tablename1="kc01";
    var tablename2="kc02";
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
exports.getline=function(req,res,next){
    console.log('goto get healthment  index page data');
    var a=" bae014 sj,aae238 je";
    var da=req.body.ssn;
    var condition={name:"aac001",value:da};
    var tablename="kc93";
    Pag.gett(a,tablename,condition, function(err, data) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        console.log('sucess to get the healthment index detail data');
        return res.json(data);
    });
};
exports.healthye=function(req,res,next){
    console.log('goto get healthment  index page data');
    var da=req.body.ssn;
    var condition={name:"aac001",value:da};
    var tablename1="kc96";
    var tablename2="kc93";
    Pag.gethye(tablename1,tablename2,condition, function(err, data) {
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
exports.healthye2=function(req,res,next){
    console.log('goto get healthment  index page data');
    var da=req.body.ssn;
    var condition={name:"aac001",value:da};
    var tablename1="kc97";
    var tablename2="kc93";
    Pag.gethye2(tablename1,tablename2,condition, function(err, data) {
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
    console.log('goto get health income');
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
        console.log('sucess to get the health index detail data');
        return res.json(data);
    });
};

exports.healthexp=function(req,res,next){
    console.log('goto get health exp');
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
        console.log('sucess to get the health index detail data');
        return res.json(data);
    });
};

exports.healthpayrecord=function(req,res,next){
    console.log('goto get health endowrecord');
    var ty=req.body.type;
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);

    var condition1={name:"aac001",value:aa};
    var condition2={name:"aae034",value:ab};

    if(ty==2)
    {  //zhigong
        var a="AAE180,SUM(BAB061) pers,SUM(BAB041) comp ";
        var tablename="ac61";
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
            console.log('sucess to get the health index detail data');
            return res.json(data);
        });
    }else{
         a="bab052,bab051 ";
        tablename="ac65";
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
            console.log('sucess to get the health index detail data');
            return res.json(data);
        });

    }

};



//record++healthaccrecord
exports.healthpaidrecord=function(req,res,next){
    //select a.bkc004,sum(a.akc264) zong,sum(a.bkc104) geren,sum(a.bkc001) quane,sum(a.bkc002) bufen,sum(a.akc253) zifei,sum(a.akc254) zifu,
    //if(a.aka130="1",sum(a.akc264),0)  zhuyuan, if(a.aka130="2",sum(a.akc264),0)  changhu, if(a.aka130="4",sum(a.akc264),0)  mentong,
    // if(a.aka130="6",sum(a.akc264),0)  pumen
    //from (select * from kc02 where  aac001=02372325197407040444 and aae001="2007") a
    console.log('goto get health endow paidrecord');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);
    var a=" a.bkc004,sum(a.akc264) zong,sum(a.bkc104) geren,sum(a.bkc001) quane,sum(a.bkc002) bufen,sum(a.akc253) zifei,sum(a.akc254) zifu, if(a.aka130='1',sum(a.akc264),0)  zhuyuan, if(a.aka130='2',sum(a.akc264),0)  changhu, if(a.aka130='4',sum(a.akc264),0)  mentong, if(a.aka130='6',sum(a.akc264),0)  pumen "
    var tablename=" kc02 ";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"aae001",value:ab};

    Pag.hpaidrecord(a,tablename,condition1,condition2, function(err, data) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!data) {
            console.log('failed get index  data ');
            message='failed get index data';
            return res.json(404,{error:message});
        };
        console.log('sucess to get the health index detail data');
        return res.json(data);
    });
};



exports.healthaccrecord=function(req,res,next){
var ty=req.body.type;
var aa=req.body.ssn;
var bb=req.body.date;
    if(ty=="22") {
         //jumin
        var a=" bkc213 jiaofei,bkc215 butie,aic169 jizhang";
        var tablename="kc94";
        var condition1={name:"aac001",value:aa};
        var condition2={name:"bae014",value:bb};
        Pag.hrecord(a,tablename,condition1,condition2, function(err, data) {
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
        console.log('zhigong gerenzhanghu');

        var a=" bkc213 jiaofei,bkc215 butie,aae238 jizhang";
        var tablename="kc93";
        var condition1={name:"aac001",value:aa};
        var condition2={name:"bae014",value:bb};
        Pag.hrecord(a,tablename,condition1,condition2, function(err, data) {
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

exports.hyearpay=function(req,res,next){

    var ty=req.body.type;
    console.log('goto get health healthrecord');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);
    var a=" distinct left( AAE002, 4) ";
    var bb="aae002";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"AAE002",value:ab};
    if(ty==2){

        var tablename=" kc96";
        var zhipay=hyear(a,bb,tablename,condition1,condition2,function(err,data){
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
        tablename=" kc97";

        var jupay=hyear(a,bb,tablename,condition1,condition2,function(err,data){
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
var hyear=function(a,bb,tablename,condition1,condition2,callback){

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
exports.hyearpaid=function(req,res,next){

    var ty=req.body.type;
    console.log('goto get health endowrecord aaaaaaaaaa');
    var aa=req.body.ssn;
    var ab=req.body.date;
    console.log(ab);
    var a=" distinct left( AAE001, 4) ";
    var bb="aae001";
    var condition1={name:"aac001",value:aa};
    var condition2={name:"aae001",value:ab};
    var tablename=" kc02";

    if(ty==2){
        //select   distinct left( AAE041, 4)  aae041 from ic11 where aac001 =20615072410008424449 and  aae140="101"  and aae041 >'2011' ORDER BY aae041 asc
        var condition3={name:"null",value:"null"};
        var zhipaid=hyearpaid(a,bb,tablename,condition1,condition2,condition3,function(err,data){
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
        var condition3={name:"null",value:"null"};
        var jupaid=hyearpaid(a,bb,tablename,condition1,condition2,condition3,function(err,data){
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
var hyearpaid=function(a,bb,tablename,condition1,condition2,condition3,callback){

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

exports.hpaidz=function(req,res,next){
    console.log('goto get --------------');
    //select aac001,aae001 year,sum(akc264) zong,aka130 from kc02 where aac001="02372325197407040444"  GROUP BY aae001 desc
    var b=req.body.ssn;

    var a=" aae001 x,sum(akc264) y  ";
    var condition={name:"aac001",value:b};
    var tablename="kc02";
    Pag.geth(a,tablename,condition, function(err, data) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!data) {
            console.log('failed get   data ');
            message='failed get index data';
            return res.json(404,{error:message});
        };
        console.log('sucess to get the endowment  ssssssss');
        return res.json(data);
    });
};
exports.hpaidm=function(req,res,next){
    console.log('goto get --------------');
 //   select aac001,sum(bkc001) qt,sum(bkc002) bt,sum(akc253) qz,sum(akc254) gz,sum(bkc104) grzh,aae001 year from  kc02 where  aac001="02372325197407040444"  and aka130="6" GROUP BY aae001 desc
    var b=req.body.ssn;
    var a=" aae001 x,sum(bkc001) y  ";
    var condition1={name:"aac001",value:b};
    var condition2={name:"aka130",value:"6"};
    var tablename="kc02";

    Pag.gethm(a,tablename,condition1,condition2, function(err, qt) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!qt) {
            console.log('failed get   data ');
            message='failed get index data';
            return res.json(404,{error:message});
        };

         a=" aae001 x,sum(bkc002) y  ";
        Pag.gethm(a,tablename,condition1,condition2, function(err, bt) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            if (!bt) {
                console.log('failed get   data ');
                message='failed get index data';
                return res.json(404,{error:message});
            };

            a=" aae001 x,sum(akc253) y  ";
            Pag.gethm(a,tablename,condition1,condition2, function(err, qz) {
                if (err) {
                    console.log('something wrong');
                    return next(err);
                }
                if (!qz) {
                    console.log('failed get   data ');
                    message='failed get index data';
                    return res.json(404,{error:message});
                };


                a=" aae001 x,sum(akc254) y  ";
                Pag.gethm(a,tablename,condition1,condition2, function(err, gz) {
                    if (err) {
                        console.log('something wrong');
                        return next(err);
                    }
                    if (!gz) {
                        console.log('failed get   data ');
                        message='failed get index data';
                        return res.json(404,{error:message});
                    };

                    a=" aae001 x,sum(bkc104) y  ";
                    Pag.gethm(a,tablename,condition1,condition2, function(err, grzh) {
                        if (err) {
                            console.log('something wrong');
                            return next(err);
                        }
                        if (!grzh) {
                            console.log('failed get   data ');
                            message='failed get index data';
                            return res.json(404,{error:message});
                        }
                        console.log('sucess  ssssssss');
                        console.log(qt);
                        console.log(bt);
                        console.log(qz);
                        console.log(gz);
                        console.log(grzh);

                    var re=[
                        { name: "全部统筹" ,
                            sales:qt },
                            { name: "部分统筹" ,
                                sales:bt },
                            { name: "自费" ,
                                sales:qz },
                            { name: "自付" ,
                                sales:gz },
                            { name: "个人账户支付" ,
                                sales:grzh }
                        ]

                        console.log('sucess to get ssssssss');
                        console.log(re);
                        return res.json(re);
                    });

                });

            });

        });

}  );
};

exports.hpaidzhu=function(req,res,next){
    console.log('goto get --------------');
    //   select aac001,sum(bkc001) qt,sum(bkc002) bt,sum(akc253) qz,sum(akc254) gz,sum(bkc104) grzh,aae001 year from  kc02 where  aac001="02372325197407040444"  and aka130="6" GROUP BY aae001 desc
    var b=req.body.ssn;
    var a=" aae001 x,sum(bkc001) y  ";
    var condition1={name:"aac001",value:b};
    var condition2={name:"aka130",value:"1"};
    var tablename="kc02";

    Pag.gethm(a,tablename,condition1,condition2, function(err, qt) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!qt) {
            console.log('failed get   data ');
            message='failed get index data';
            return res.json(404,{error:message});
        };

        a=" aae001 x,sum(bkc002) y  ";
        Pag.gethm(a,tablename,condition1,condition2, function(err, bt) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            if (!bt) {
                console.log('failed get   data ');
                message='failed get index data';
                return res.json(404,{error:message});
            };

            a=" aae001 x,sum(akc253) y  ";
            Pag.gethm(a,tablename,condition1,condition2, function(err, qz) {
                if (err) {
                    console.log('something wrong');
                    return next(err);
                }
                if (!qz) {
                    console.log('failed get   data ');
                    message='failed get index data';
                    return res.json(404,{error:message});
                };


                a=" aae001 x,sum(akc254) y  ";
                Pag.gethm(a,tablename,condition1,condition2, function(err, gz) {
                    if (err) {
                        console.log('something wrong');
                        return next(err);
                    }
                    if (!gz) {
                        console.log('failed get   data ');
                        message='failed get index data';
                        return res.json(404,{error:message});
                    };

                    a=" aae001 x,sum(bkc104) y  ";
                    Pag.gethm(a,tablename,condition1,condition2, function(err, grzh) {
                        if (err) {
                            console.log('something wrong');
                            return next(err);
                        }
                        if (!grzh) {
                            console.log('failed get   data ');
                            message='failed get index data';
                            return res.json(404,{error:message});
                        }
                        console.log('sucess  ssssssss');
                        console.log(qt);
                        console.log(bt);
                        console.log(qz);
                        console.log(gz);
                        console.log(grzh);

                        var re=[
                            { name: "全部统筹" ,
                                sales:qt },
                            { name: "部分统筹" ,
                                sales:bt },
                            { name: "自费" ,
                                sales:qz },
                            { name: "自付" ,
                                sales:gz },
                            { name: "个人账户支付" ,
                                sales:grzh }
                        ]

                        console.log('sucess to get ssssssss');
                        console.log(re);
                        return res.json(re);
                    });

                });

            });

        });

    }  );
};

exports.hpaidmen=function(req,res,next){
    console.log('goto get --------------');
    //   select aac001,sum(bkc001) qt,sum(bkc002) bt,sum(akc253) qz,sum(akc254) gz,sum(bkc104) grzh,aae001 year from  kc02 where  aac001="02372325197407040444"  and aka130="6" GROUP BY aae001 desc
    var b=req.body.ssn;
    var a=" aae001 x,sum(bkc001) y  ";
    var condition1={name:"aac001",value:b};
    var condition2={name:"aka130",value:"2"};
    var tablename="kc02";

    Pag.gethm(a,tablename,condition1,condition2, function(err, qt) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!qt) {
            console.log('failed get   data ');
            message='failed get index data';
            return res.json(404,{error:message});
        };

        a=" aae001 x,sum(bkc002) y  ";
        Pag.gethm(a,tablename,condition1,condition2, function(err, bt) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            if (!bt) {
                console.log('failed get   data ');
                message='failed get index data';
                return res.json(404,{error:message});
            };

            a=" aae001 x,sum(akc253) y  ";
            Pag.gethm(a,tablename,condition1,condition2, function(err, qz) {
                if (err) {
                    console.log('something wrong');
                    return next(err);
                }
                if (!qz) {
                    console.log('failed get   data ');
                    message='failed get index data';
                    return res.json(404,{error:message});
                };


                a=" aae001 x,sum(akc254) y  ";
                Pag.gethm(a,tablename,condition1,condition2, function(err, gz) {
                    if (err) {
                        console.log('something wrong');
                        return next(err);
                    }
                    if (!gz) {
                        console.log('failed get   data ');
                        message='failed get index data';
                        return res.json(404,{error:message});
                    };

                    a=" aae001 x,sum(bkc104) y  ";
                    Pag.gethm(a,tablename,condition1,condition2, function(err, grzh) {
                        if (err) {
                            console.log('something wrong');
                            return next(err);
                        }
                        if (!grzh) {
                            console.log('failed get   data ');
                            message='failed get index data';
                            return res.json(404,{error:message});
                        }
                        console.log('sucess  ssssssss');
                        console.log(qt);
                        console.log(bt);
                        console.log(qz);
                        console.log(gz);
                        console.log(grzh);

                        var re=[
                            { name: "全部统筹" ,
                                sales:qt },
                            { name: "部分统筹" ,
                                sales:bt },
                            { name: "自费" ,
                                sales:qz },
                            { name: "自付" ,
                                sales:gz },
                            { name: "个人账户支付" ,
                                sales:grzh }
                        ]

                        console.log('sucess to get ssssssss');
                        console.log(re);
                        return res.json(re);
                    });

                });

            });

        });

    }  );
};

exports.hpaystack=function(req,res,next){
    console.log('goto get  hpaystack');
    var b=req.body.ssn;
    var a="left(bae014,4) y,sum(bab041)  g,sum(bab061)  d ";
    var ty=req.body.type;
    var condition={name:"aac001",value:b};
    if(ty==2)
    {  //zhigong

        var tablename="ac60";
        Pag.getts(a,tablename,condition, function(err, data) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            if (!data) {
                console.log('failed get   data ');
                message='failed get index data';
                return res.json(404,{error:message});
            };
            console.log('sucess to get the endowment  ssssssss');
            return res.json(data);
        });

    }else{
        a="left(aae034,4) y,sum(bab052)  g,sum(bac055)  d ";
        tablename="ac65";
        Pag.getts(a,tablename,condition, function(err, data) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            if (!data) {
                console.log('failed get   data ');
                message='failed get index data';
                return res.json(404,{error:message});
            };
            console.log('sucess to get the endowment  ssssssss');
            return res.json(data);
        });
    }
};