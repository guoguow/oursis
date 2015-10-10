
var  client = require('../../../../my_modules/MDaccess/database.js'),
    crypto=require('crypto');
function  Pay(userstat){
     this.username=userstat.username;
     this.statsign=userstat.statsign;

}

mysql = client.getDbCon("sis");
module.exports = Pay;

//获取
Pay.getpay=  function  get(a,tablename,condition1,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition1.name+" ='"+condition1.value+"'";
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
//get data by the date 获取
Pay.getbydate=  function  get(a,tablename,condition1,condition2,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition1.name+" ='"+condition1.value+"'"+" and " +condition2.name+" > '"+condition2.value1+"'"+" and "+condition2.name+" <'"+condition2.value2+"'";
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
Pay.setsign =  function  update(statsign,tablename,condition,callback) {

    var sql = "update " +tablename +" set statsign= "+statsign+" where  "+condition.name+" ='"+condition.value+"'";
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(callback);
            return  callback(err,fields);
        }
    });

};