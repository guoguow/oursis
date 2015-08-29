
var  client = require('../../../MDaccess/database.js'),
    crypto=require('crypto');
function  Pay(paydata){
     this.signforpay=paydata.signforpay;
       this.sign=paydata.sign;
        this.kind=paydata.kind;
        this.value1=paydata.value1;
        this.value2=paydata.value2;
        this.value3=paydata.value3;
        this.value4=paydata.value4;
}

mysql = client.getDbCon("sis");
module.exports = Pay;

//获取
Pay.getpay=  function  get(a,tablename,condition,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition.name+" ='"+condition.value+"'";
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(results);
            console.log(callback);
            return  callback(err,results,fields);
        }
    });

};

//更新信息
Pay.update =  function  update(callback) {
    var  paydata = {
        signforpay: this.signforpay,
        sign:this.sign,
        kind:this.kind,
        value1:this.value1,
        value2: this.value2,
        value3:this.value3,
        value4:this.value4
    };
    var sql = "update paydata set signforpay= ?";
    console.log(sql);
    mysql.query(sql,[0],function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(callback);
            return  callback(err,fields);
        }
    });

};
Pay.setsign =  function  update(signforpay,sign,callback) {
    var  paydata = {
        signforpay: this.signforpay,
        sign:this.sign,
        kind:this.kind,
        value1:this.value1,
        value2: this.value2,
        value3:this.value3,
        value4:this.value4
    };
    var sql = "update paydata set signforpay=? where sign=?";
    console.log(sql);
    mysql.query(sql,[signforpay,sign],function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(callback);
            return  callback(err,fields);
        }
    });

};