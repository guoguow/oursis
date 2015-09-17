/**
 * Created by LuWenWen on 2015/8/28.
 */

var  client = require('../DBaccess/database.js');

function  Pag(user) {
    this.firstname = user.firstName;
    this.lastname=user.lastName;
    this.email=user.email;
    this.username = user.username;
    this.password = user.password;
    this.ssn=user.ssn;
    this.name=user.name;
    this.mobilephone=user.mobilephone;
}

mysql = client.getDbCon("sis");
module.exports = Pag;

Pag.get =  function  get(a,tablename,condition,start,end,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition.name+" ='"+condition.value+"' limit "+start+","+end;
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
Pag.get2 =  function  get2(a,tablename,condition,condition2,start,end,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition.name+" ='"+condition.value+"' and "+condition2.name+"='"+condition2.value+"' limit "+start+","+end;
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
Pag.getCount =  function  getCount(tablename,condition,callback) {

    var sql = "select count(*) count from " +tablename+" where "+condition.name+" ='"+condition.value+"'";
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

Pag.getCount2 =  function  getCount2(tablename,condition,condition2,callback) {

    var sql = "select count(*) count from " +tablename+" where "+condition.name+" ='"+condition.value+"' and "+condition2.name+"='"+condition2.value+"'";
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
