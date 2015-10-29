/**
 * Created by LuWenWen on 2015/10/15.
 */

var Pag = require('../models/pag.js');

exports.getCount=function(req,res,next){

    var condition={name:'aac001',value:req.body.ssn};
    var condition2 ={name:'',value:''};
    if(req.body.dt1&&req.body.dt2) {
        condition2 ={name:'',value1:req.body.dt1,value2:req.body.dt2};
    };
    var tablename="";
    switch (req.body.bz) {
        case 11:
            tablename = "ac64"; condition2.name="aae034";break;
        case 12:
            tablename="MC11"; condition2.name="aae002";break;
        case 21:
            tablename="ac63"; condition2.name="aae034";break;
        case 22:
            tablename="lc33"; condition2.name="aae002";break;
        case 31:
            tablename="ac62"; condition2.name="aae034";break;
        case 32:
            tablename="JC37"; condition2.name="AAE149";break;
        case 401:
            tablename="ic02"; condition2.name="BAE014";break;
        case 402:
            tablename="ic11"; condition2.name="aae002";break;
        case 411:
            tablename="ac60"; condition2.name="aae034";break;
        case 412:
            tablename="ac65"; condition2.name="aae034";break;
        case 421:
            tablename="IC17"; condition2.name="AAE002";break;
        case 422:
            tablename="IC11"; condition2.name="aae041";break;
        case 501:
            tablename="kc96"; condition2.name="BAE014";break;
        case 502:
            tablename="kc02"; condition2.name="AAE040";break;
        case 511:
            tablename="ac61"; condition2.name="aae034";break;
        case 512:
            tablename="ac65"; condition2.name="aae034";break;
        case 521:
        case 522:
        case 523:
            tablename="kc02"; condition2.name="AAE040";break;


    }
    if(req.body.dt1&&req.body.dt2) {
        Pag.getCount(tablename, condition,condition2,function (err, data) {
            if (!data) {
                message = 'no data.'
                return res.json(403, {error: message});
            }
            ;
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            ;
            return res.json(data);
        })
    }else{
        Pag.getCount2(tablename, condition,function (err, data) {
            if (!data) {
                message = 'no data.'
                return res.json(403, {error: message});
            }
            ;
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            ;
            return res.json(data);
        })
    }
};