
var  client = require('../../../DBaccess/database.js'),
    crypto=require('crypto');
function  User(user) {
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
module.exports = User;

User.get =  function  get(a,tablename,condition,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition.name+" ='"+condition.value+"'";
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

User.getlist =  function  getlist(a,tablename,condition,start,end,callback) {

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


User.getSsn=  function  getSsn(username,callback) {

    var sql = "select ssn from user where username='"+username+"'";
    console.log(sql);
    mysql.query(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(callback);
            return  callback(err,results[0],fields);
        }});

};
