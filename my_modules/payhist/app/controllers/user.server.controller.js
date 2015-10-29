var Pay = require('../../app/models/user.server.model.js'),
    passport = require('passport'),
crypto=require('crypto');


exports.pay=function(req,res,next){

    console.log('goto get payhist  detail data for page');


            var a="value1,value2,value3,value4";
            var condition={name:"sign",value:req.body.statsign};
            var tablename="paydata";

            Pay.get(a,tablename,condition, function(err, data) {
                console.log('enter callback');

                if (err) {
                    console.log('something wrong');
                    return next(err);
                }
                if (!data) {
                    console.log('sistype not exists 999999999999');
                    message='sistype does not exists999999999'
                    return res.json(404,{error:message});
                };
                console.log('sucess to get the payhist detail data99999999');
                return res.json(data);
            });
            console.log('end of payhist choose');

};

