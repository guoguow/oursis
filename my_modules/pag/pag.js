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

module.exports = Pag;


Pag.get =  function  get(a,tablename,condition,condition2,start,end,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition+condition2+" limit "+start+","+end;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(results);
            console.log(callback);
            return  callback(err,results,fields);
        }
    });

};
Pag.getCount =  function  getCount(tablename,condition,condition2,callback) {

    var sql = "select count(*) count from " +tablename+" where "+condition+condition2;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(results);
            console.log(callback);
            return  callback(err,results[0],fields);
        }
    });

};

