
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
//新增用户
User.prototype.save = function  save(callback) {
    // 用户对象
    var  user = {
        firstname: this.firstname,
        lastname:this.lastname,
        email:this.email,
        username:this.username,
        password: this.password,
        ssn:this.ssn,
        name:this.name,
        mobilephone:this.mobilephone


    };
    if (user.password){
        var  md5 = crypto.createHash('md5');
        user.password = md5.update(user.password).digest('base64');
    };
    //uuid = uid.v4();
    //插入数据库
    var sql ="insert into user (firstname,lastname,email,username,password) values("+user.firstname+","+user.lastname+","+user.email+","+user.username+","+user.password+")";

    client.getDbCon(sql,function(err,results,fields){
        if (err) {
            throw err;
        } else {
            return callback(err,user.username, fields);


        }
    });
};
//获取用户
User.get =  function  get(a,tablename,condition,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition.name+" ='"+condition.value+"'";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results[0],fields);
        }
    });

};
User.check =  function  check(a,tablename,ssn,sname,idcard,callback) {

    var sql = "select "+a+" from " +tablename+" where aac001='"+ssn+"' and aac003='"+sname+"' and aac002='"+idcard+"'";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results[0],fields);
        }
    });

};

//更新基本信息
User.prototype.update =  function  update(callback) {
    var  user = {
        firstname: this.firstname,
        lastname:this.lastname,
        email:this.email,
        username:this.username,
        password: this.password,
        ssn:this.ssn,
        name:this.name



    };
    var sql = "update user set ssn="+user.ssn+" where username="+user.username;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,user.ssn,fields);
        }
    });

};
User.prototype.update2 =  function  update(callback) {
    var  user = {

        ssn:this.ssn,
        name:this.name,
        idcard:this.idcard,
        mobilephone:this.mobilephone,
        sex:this.sex,
        address:this.address

    };
    var sql = "update bi3.ac01 set aac001="+user.ssn+",AAC003="+user.name+",AAC002="+user.idcard+",AAE005="+user.mobilephone+",AAC004="+user.sex+",BAC005="+user.address+" where aac001="+user.ssn;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,user.ssn,fields);
        }
    });

};
User.hashPassword = function hashPassword(password){
    console.log("bbbbbb");

    var  md5 = crypto.createHash('md5');
    var password = md5.update(password).digest('base64');

    return password;
};

User.authenticate=function authenticate(user,password){
    return user.password==User.hashPassword(password);
};
