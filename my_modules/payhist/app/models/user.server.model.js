
var  client = require('../../../DBaccess/database.js'),
    crypto=require('crypto');
function  Pay(userstat){
     this.username=userstat.username;
     this.statsign=userstat.statsign;

}

module.exports = Pay;

//获取用户
Pay.get =  function  get(a,tablename,condition,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition.name+" ='"+condition.value+"'";
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};
//获取
Pay.getpay=  function  get(a,tablename,condition1,condition2,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition1.name+" ='"+condition1.value+"'"+" and "+condition2.name+" ='"+condition2.value+"'";
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};

