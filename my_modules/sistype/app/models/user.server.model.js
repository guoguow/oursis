
var  client = require('../../../MDaccess/database.js'),
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


User.gettype =  function  get(a,tablename,condition,tablename2,ssn,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition.name+" ='"+condition.value+"' and exists (select aac001 from "+tablename2+" where aac001='"+ssn+"')";
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
