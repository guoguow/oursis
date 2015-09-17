var Pag = require('../../../pag/pag.js');

exports.getPayment=function(req,res,next){

    console.log('goto get payment  detail data for page');
    console.log(req.body);

        var a=" akb020 yybm,aka120 jbbm,AKC173 zyrq,AKC194 cyrq ";
        var condition={name:"aac001",value:req.body.ssn};
        var condition2={name:"bka021",value:req.body.jylb};
        var tablename="md3.kc01";
        var start=req.body.page*req.body.pageSize;
        var end=req.body.pageSize;
    Pag.get2(a,tablename,condition,condition2, start,end,function (err, data) {
            if (!data) {
                message = 'no data.'
                return res.json(403, {error: message});
            };
            if (err) {
                console.log('something wrong');
                return next(err);
            };
            return res.json(data);
         })
};
exports.getAll=function(req,res,next){

    console.log('goto get payment  detail data for page');
    console.log(req.body);

    var condition={name:"aac001",value:req.body.ssn};
    var condition2={name:"bka021",value:req.body.jylb};
    var tablename="md3.kc01";
    Pag.getCount2(tablename,condition,condition2, function (err, data) {
        if (!data) {
            message = 'no data.'
            return res.json(403, {error: message});
        };
        if (err) {
            console.log('something wrong');
            return next(err);
        };
        return res.json(data);
    })
};