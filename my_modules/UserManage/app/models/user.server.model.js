
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
    var sql ="insert into user (firstname,lastname,email,username,password) values(?,?,?,?,?)";

    mysql.query(sql,[user.firstname,user.lastname,user.email,user.username,user.password],function(err,results,fields){
        if (err) {
            throw err;
        } else {
            console.log(callback);
            return callback(err,user.username, fields);


        }
    });
};
//获取用户
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
    var sql = "update user set ssn=? where username=?";
    console.log(sql);
    mysql.query(sql,[user.ssn,user.username],function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(callback);
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
    var sql = "update bi3.ac01 set aac001=?,AAC003=?,AAC002=?,AAE005=?,AAC004=?,BAC005=? where aac001=?";
    console.log(sql);
    mysql.query(sql,[user.ssn,user.name,user.idcard,user.mobilephone,user.sex,user.address,user.ssn],function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(callback);
            return  callback(err,user.ssn,fields);
        }
    });

};
User.hashPassword = function hashPassword(password){
    console.log("bbbbbb");

    var  md5 = crypto.createHash('md5');
    var password = md5.update(password).digest('base64');
    console.log(password);

    return password;
};

User.authenticate=function authenticate(user,password){
    console.log(user.password);
    return user.password==User.hashPassword(password);
};
