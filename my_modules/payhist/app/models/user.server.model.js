
var  client = require('../../../DBaccess/database.js'),
    crypto=require('crypto');
function  pay( ) {
}

mysql = client.getDbCon("sis");
module.exports = pay;

//获取
pay.getpay=  function  get(a,tablename,condition,callback) {

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

