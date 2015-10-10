
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
Pay.getindex=  function  get(a,b,c,tablename1,tablename2,condition,callback) {
    //select max(a.AAE034),sum(a.BAB061),je
    //from si3.ac60 a,(select sum(AAE019) je,aac001 from ad3.ic17 where aac001='00010070110000053695') b
    //select a.aae034 dm ,sum(a.bab061) pm,je from si3.ac63 a , (SELECT sum(b.alc072) je  from hm3.lC33  b  where aac001 ='00010072110000057117' ) b  where a.aac001 = '00010072110000057117 ' order by a.aae034  desc limit 1


    var sql = "select a."+a+"  dm,sum(a."+b+") pm,je  from " +tablename1+" a,(select  sum(b."+c+") je  from "+tablename2+ " b  where" +
        " "+condition.name+" ='"+condition.value+"' ) b where a."+condition.name+" = '"+condition.value +" 'order by a."+a+" desc limit 1";
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