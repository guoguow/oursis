
var  client = require('../../../MDaccess/database.js'),
    crypto=require('crypto');
function  Payment(userstat){
     this.username=userstat.username;
     this.statsign=userstat.statsign;

}

mysql = client.getDbCon("sis");
module.exports = Payment;

//获取用户
Payment.getPayment =  function  getPayment(a,tablename,condition,condition2,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition.name+" ='"+condition.value+"' and "+condition2.name+"='"+condition2.value+"'";
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
Payment.getAll =  function  getPayment(a,tablename,condition,condition2,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition.name+" ='"+condition.value+"' and "+condition2.name+"='"+condition2.value+"'";
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(results);
            console.log(callback);
            return  callback(err,results[0],fields);
        }
    });

};