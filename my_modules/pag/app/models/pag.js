/**
 * Created by LuWenWen on 2015/8/28.
 */

var  client = require('../../../DBaccess/database.js');

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

Pag.getindex=  function  get(a,b,c,d,tablename1,tablename2,condition,callback) {
    //select max(a.AAE034),sum(a.BAB061),je
    //from si3.ac60 a,(select sum(AAE019) je,aac001 from ad3.ic17 where aac001='00010070110000053695') b
    //where a.aac001=b.aac001

    var sql = "select a."+a+"  dm,sum(a."+b+") pm,je  from " +tablename1+" a,(select  sum("+c+") je  from "+tablename2+ " b  where "+condition.name+" ="+condition.value+" ) b where a."+condition.name+" = "+condition.value +" ORDER BY a."+a+" desc limit 1 ";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results[0],fields);
        }
    });
};

Pag.getpay=  function  get(a,tablename,condition1,start,end,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition1.name+" ="+condition1.value+" limit "+start+","+end;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};
Pag.getbydate=  function  get(a,tablename,condition1,condition2,start,end,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition1.name+" ="+condition1.value+" and " +condition2.name+" > "+condition2.value1+" and "+condition2.name+" <"+condition2.value2+" limit "+start+","+end;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};
Pag.get =  function  get(a,tablename,condition,start,end,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition.name+"="+condition.value+" limit "+start+","+end;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};
Pag.getCount2 =  function  getCount(tablename,condition,callback) {

    var sql = "select count(*) count from " +tablename+" where "+condition.name+"= "+condition.value;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results[0],fields);
        }
    });

};
Pag.getCount =  function  getCount(tablename,condition,condition2,callback) {

    var sql = "select count(*) count from " +tablename+" where "+condition.name+"= "+condition.value+" and "+condition2.name+">"+condition2.value1+" and "+condition2.name+"<"+condition2.value2;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results[0],fields);
        }
    });

};

Pag.getpaid=  function  get(aa,bb,tablename1,tablename2,condition1,condition3,start,end,callback) {
//select a.akc173,a.bke003,b.bkc018,b.aka130,b.akc264,b.akc263 from sis.kc01 a,(select bkc018,aka130,akc264,akc263 from sis.kc02 b  where aac001 ='00010072110000057117' and b.aka130="1" ) b where a.aac001 = 00010072110000057117 and a.aka130="1";

    var sql = "select "+aa+" from " +tablename1+"  a, (select "+bb+" from  "+tablename2 +"  b where "+condition1.name+" ="+condition1.value+" and b."+condition3.name+" ="+condition3.value+")"+" b  where "+"a."+condition1.name+" ="+condition1.value+" and  a."+condition3.name+" ="+condition3.value+" limit "+start+","+end;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};
//get data by the date 获取
Pag.getpaidbydate=  function  get(aa,bb,tablename1,tablename2,condition1,condition2,condition3,start,end,callback) {

    var sql = "select "+aa+" from " +tablename1+"  a, (select "+bb+" from  "+tablename2 +"  b where "+condition1.name+" ='"+condition1.value+"'"+" and b."+condition3.name+" ='"+condition3.value+"')"+"" +
        " b  where "+"a."+condition1.name+" ='"+condition1.value+"'"+"and  a."+condition3.name+" ='"+condition3.value+"'"+" and a." +condition2.name+" > '"+condition2.value1+"'"+" and a."+condition2.name+" <'"+condition2.value2+"' limit "+start+","+end;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};

