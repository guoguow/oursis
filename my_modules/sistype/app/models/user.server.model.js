
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

module.exports = User;


User.gete =  function  get(a,tablename,condition,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition.name+" ='"+condition.value+"'";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};
