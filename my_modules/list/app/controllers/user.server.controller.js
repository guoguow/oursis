var Pag = require('../../../pag/app/models/pag.js')
    ;


exports.getlist=function(req,res,next) {
    console.log('goto get list');

    console.log(req.body);
    var lname = req.body.username;
    Pag.getSsn(lname,function (err, data) {

        if (err) {
            console.log('something wrong');
            return next(err);
        }
        console.log(data);
        var ssn=data.ssn;
        var a=" ssn,time,expense ";
        var condition={name:"ssn",value:ssn};
        var tablename="list";
        var start=req.body.page*req.body.pageSize;
        var end=req.body.pageSize;
        Pag.getlist(a,tablename,condition ,start,end,function (err, list) {

            if (err) {
                console.log('something wrong');
                return next(err);
            }
            console.log('return list');
            console.log(list);
            return res.json(list);

        })
    });

};
exports.getalllist=function(req,res,next) {
    console.log('goto get alllist');
    var lname = req.body.username;
    Pag.getSsn(lname,function (err, data) {

        if (err) {
            console.log('something wrong');
            return next(err);
        }
        console.log(data);
        var ssn=data.ssn;

        var a=" count(*) count";
        var condition={name:"ssn",value:ssn};
        var tablename="list";
        Pag.get(a,tablename,condition,function (err, count) {

            if (err) {
                console.log('something wrong');
                return next(err);
            }
            console.log('return alllist');
            console.log(count);
            return res.json(count);

        })

    });


};







