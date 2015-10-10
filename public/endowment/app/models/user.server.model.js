
var  client = require('../../../../my_modules/MDaccess/database.js'),
    crypto=require('crypto');
function  Pay(userstat){
     this.username=userstat.username;
     this.statsign=userstat.statsign;
}
var timestamp = new Date().getMilliseconds();
console.log(timestamp);
var timestamp1 = new Date().getMilliseconds();
console.log(timestamp1);
module.exports = Pay;

//获取
Pay.getpay=  function  get(a,tablename,condition1,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition1.name+" ='"+condition1.value+"'";
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
//get data by the date 获取
Pay.getbydate=  function  get(a,tablename,condition1,condition2,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition1.name+" ='"+condition1.value+"'"+" and " +condition2.name+" > '"+condition2.value1+"'"+" and "+condition2.name+" <'"+condition2.value2+"'";
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
//get endowment index data 获取
Pay.getindex=  function  get(a,b,tablename1,condition,callback) {
    //select max(a.AAE034),sum(a.BAB061),je
    //from si3.ac60 a,(select sum(AAE019) je,aac001 from ad3.ic17 where aac001='00010070110000053695') b
    //where a.aac001=b.aac001

    var sql = "select "+a+" dm,sum("+b+") pm from " +tablename1+"   where "+condition.name+" = "+condition.value +" ORDER BY "+a+" desc limit 1 ";

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
Pay.setsign =  function  update(statsign,tablename,condition,callback) {

    var sql = "update " +tablename +" set statsign= "+statsign+" where  "+condition.name+" ='"+condition.value+"'";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(callback);
            return  callback(err,fields);
        }
    });

};
Pay.setorsign =  function  update(orsign,tablename,condition,callback) {

    var sql = "update " +tablename +" set orsign = "+orsign+" where  "+condition.name+" ='"+condition.value+"'";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            console.log(callback);
            return  callback(err,fields);
        }
    });

};