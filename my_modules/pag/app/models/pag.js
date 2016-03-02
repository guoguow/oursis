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
    var sql = "select a."+a+"  dm,sum(a."+b+") pm,je  from " +tablename1+" a,(select  sum("+c+") je  from "+tablename2+ " b  where "+condition.name+" = '"+condition.value+"' ) b where a."+condition.name+" = '"+condition.value +"' ORDER BY a."+a+" desc limit 1 ";
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

    var sql = "select "+a+" from " +tablename+" where "+condition1.name+" ='"+condition1.value+"' limit "+start+","+end;
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

    var sql = "select "+a+" from " +tablename+" where "+condition1.name+" ='"+condition1.value+" 'and " +condition2.name+" > '"+condition2.value1+"' and "+condition2.name+" < '"+condition2.value2+"' limit "+start+","+end;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });
};


Pag.erecord=  function  get(a,tablename,condition1,condition2,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition1.name+" = '"+condition1.value+"' and " +condition2.name+" like '"+condition2.value+"%'";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });
};

Pag.hrecord=  function  get(a,tablename,condition1,condition2,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition1.name+" = '"+condition1.value+"' and " +condition2.name+" like '"+condition2.value+"%' order by "+condition2.name+" desc limit  0,1";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });
};

Pag.eaccrecord=  function  get(a,bb,tablename,tablename1,condition1,condition2, condition3,callback) {
    // select a.bac036 pass,a.aae264 nps,a.aae265 nrate,a.bac036+a.aae264+a.aae265-b.jiben new,b.jiben
    // from (
    //  select aae019  jiben from ic11 where aac001='10113012510002373504' 'and aae041 like '2013%') b,
    //    ic02 a where a.aac001 ='10113012510002373504'  and a.aae001 = '2013'
    var sql = "select "+a+" from  (select "+bb+"  from "+tablename1+" a where " +condition1.name+" = '"+condition1.value+"' " +
        " and " +condition3.name+" like '"+condition3.value+"%' )b, " +tablename+" a where  "+condition1.name+" = '"+condition1.value+"'  and " +condition2.name+" = '"+condition2.value+"'";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });
};
Pag.getyear=  function  get(a,bb,tablename,condition1,condition2,callback) {

    var sql = "select "+a+bb+" from " +tablename+" where "+condition1.name+" = '"+condition1.value+"' and " +condition2.name+" < '"+condition2.value+"' ORDER BY "+bb+" DESC ";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });
};

//select   distinct left( AAE041, 4)  aae041 from ic11 where aac001 =20615072410008424449 and  aae140="101"  and aae041 >'2011' ORDER BY aae041 asc
Pag.getyearpaid=  function  get(a,bb,tablename,condition1,condition2,condition3,callback) {

    var sql = "select "+a+bb+" from " +tablename+" where "+condition1.name+" = '"+condition1.value+"' and "+condition3.name+" = '"+condition3.value+"' and  " +condition2.name+" > '"+condition2.value+"1231' ORDER BY "+bb+" ASC ";
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

    var sql = "select "+a+" from " +tablename+" where "+condition.name+"= '"+condition.value+"'  limit "+start+","+end;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};
Pag.gett =  function  getCount(a,tablename,condition,callback) {

    var sql = "select "+a+"  from " +tablename+" where "+condition.name+"= '"+condition.value+"' ";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });
};
Pag.getts =  function  getCount(a,tablename,condition,callback) {

    var sql = "select "+a+"  from " +tablename+" where "+condition.name+"= '"+condition.value+"'order by y asc ";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });
};
Pag.geth =  function  getCount(a,tablename,condition,callback) {

    var sql = "select "+a+"  from " +tablename+" where "+condition.name+"= '"+condition.value+"'  GROUP BY aae001 asc  ";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};
Pag.gethm =  function  getCount(a,tablename,condition1,condition2,callback) {

    var sql = "select "+a+"  from " +tablename+" where "+condition1.name+"= '"+condition1.value+"' and  "+condition2.name+"= '"+condition2.value+"'GROUP BY aae001 asc  ";
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

    var sql = "select count(*) count from " +tablename+" where "+condition.name+"= '"+condition.value+"'";
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

    var sql = "select count(*) count from " +tablename+" where "+condition.name+"= '"+condition.value+"' and "+condition2.name+">  '"+condition2.value1+"' and "+condition2.name+"< '"+condition2.value2+"'";
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

    var sql = "select "+aa+" from " +tablename1+"  a RIGHT JOIN (select "+bb+" from  "+tablename2 +"  b where "+condition1.name+" = '"+condition1.value+"' and b."+condition3.name+" = '"+condition3.value+"')"+" b  on "+"a."+condition1.name+" = '"+condition1.value+"' and  a."+condition3.name+" = '"+condition3.value+"' limit "+start+","+end;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};
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

Pag.gets =  function  get(a,tablename,condition,callback) {
//select IFNULL((select aae016  from ic03 where   AAC001="00010072110000057117"),0)
    var sql = "select IFNULL((select distinct "+a+" from " +tablename+" where "+condition.name+"= '"+condition.value+" '),0) "+a+"";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results[0],fields);
        }
    });

};
//Pag.paidrecord(bb,tablename,condition1,condition2,condition3
Pag.paidrecord =  function  get(b,tablename,condition1,condition2,condition3,condition4,callback) {
//select IFNULL((select aae019 jiben from ic11  where aac001=10113012510002373504  and  aaa036= 'A180' and aae041 like '2013%'),0) yue,
    // (select IFNULL((select aae019 jiben from ic11  where aac001=10113012510002373504  and  aaa036= 'A111' and aae041 like '2013%'),0)) jiben;
    var sql = "select IFNULL((" +
        "select "+b+" jiben from " +tablename+" where "+condition1.name+"= '"+condition1.value+"'  and "+condition2.name+"= '"+condition2.value+" ' and "+condition3.name+" like '"+condition3.value+"%'" +
        "),0) jichu,(select IFNULL((select "+b+" from " +tablename+" where "+condition1.name+"= '"+condition1.value+"'  and "+condition4.name+"= '"+condition4.value+" ' and "+condition3.name+" like '"+condition3.value+"%'),0))  geren";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });
};

Pag.birth =  function  get(b,tablename,condition1,condition2,condition22,condition222,condition3,callback) {
    //select IFNULL((select  sum(amc051)  from mc11  where aac001=00010080210000059821  and  bma001='401' and aae002 like '2010%'),0) yiliao,
      //  (select IFNULL((select sum(amc051)  from mc11  where aac001=00010080210000059821  and  bma001='402' and aae002 like '2010%'),0)) jintie,
       // (select IFNULL((select sum(amc051)  from mc11  where aac001=00010080210000059821  and  bma001='802' and aae002 like '2010%'),0)) qita;

    var sql = "select IFNULL((" +
        "select "+b+"  from " +tablename+" where "+condition1.name+"= '"+condition1.value+"'  and "+condition2.name+"= '"+condition2.value+" ' and "+condition3.name+" like '"+condition3.value+"%'" +
        "),0) yiliao,(select IFNULL((select "+b+" from " +tablename+" where "+condition1.name+"= '"+condition1.value+"'  and "+condition22.name+"= '"+condition22.value+" ' and "+condition3.name+" like '"+condition3.value+"%'),0))" +
        "  jintie,(select IFNULL((select "+b+" from " +tablename+" where "+condition1.name+"= '"+condition1.value+"'  and "+condition222.name+"= '"+condition222.value+" ' and "+condition3.name+" like '"+condition3.value+"%'),0))  qita";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });
};

Pag.hpaidrecord=  function  get(a,tablename,condition1,condition2,callback) {
  //from (select * from kc02 where  aac001=02372325197407040444 and aae001="2007") a
    var sql = "select "+a+" from  (select * from "+tablename+" where "+condition1.name+" = '"+condition1.value+"' and " +condition2.name+" = '"+condition2.value+" ') a";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });
};


Pag.ipaidRecord =  function  get(a,d,callback) {

    var sql=" select  a.bla001,je ,a.aae002,b.bla006 from ("+
        " select bla001,sum(alc072) je,AAE002 from lc33  where aac001='"+d+"' and aae002 like '%"+a+"%' and  bla001 in (318,'31A',315,805,'32B',101,201,202,808,105,104,401)  "+
        " group  by bla001 ) a RIGHT JOIN (select bla001,bla006 from la10 where bla001 in (318,'31A',315,805,'32B',101,201,202,808,105,104,401) ) b on a.bla001=b.bla001   " ;
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};
Pag.ipaidRecord2 =  function  get(a,d,callback) {

    var sql=" select  ALA040,ALC050,je  from lc01 a,(select sum(ALC072) je from lc33 where aac001='"+d+"' and aae002 like '%"+a+"%') b    "+
        "  where a.aac001='"+d+"' and ALC050 < "+a+"12    "+
        " order by alc050 DESC limit 0,1";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};

Pag.gethye =  function  get(tablename1,tablename2,condition,callback) {

    var sql=" select dyye+syye ye from "+
        " (select ifnull(aae083,0)+ifnull(aae081,0)+ifnull(aae239,0) dyye from  "+tablename1+" where aac001='"+condition.value+"'  order  by bae014 desc limit 0,1) a, "+
        " (select ifnull(aae238,0)+ifnull(aae239,0) syye from " +tablename2+" where aac001='"+condition.value+"' order  by bae014 desc limit 0,1) b    ";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};
Pag.gethye2 =  function  get(tablename1,tablename2,condition,callback) {

    var sql=" select dyye+syye ye from "+
        " (select ifnull(AKA045,0)+ifnull(AAE239,0) dyye from  "+tablename1+" where aac001='"+condition.value+"'  order  by bae014 desc limit 0,1) a, "+
        " (select ifnull(aae238,0)+ifnull(aae239,0) syye from " +tablename2+" where aac001='"+condition.value+"' order  by bae014 desc limit 0,1) b    ";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });

};
Pag.jpayrecord=  function  get(a,tablename,condition1,condition2,condition3,callback) {

    var sql = "select "+a+" from " +tablename+" where "+condition1.name+" = '"+condition1.value+"' and " +condition2.name+" like '"+condition2.value+"%' and " +condition3.name+" like '"+condition3.value+"_'";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });
};



Pag.eaccrecord=  function  get(a,bb,tablename,tablename1,condition1,condition2, condition3,callback) {
    // select a.bac036 pass,a.aae264 nps,a.aae265 nrate,a.bac036+a.aae264+a.aae265-b.jiben new,b.jiben
    // from (
    //  select aae019  jiben from ic11 where aac001='10113012510002373504' 'and aae041 like '2013%') b,
    //    ic02 a where a.aac001 ='10113012510002373504'  and a.aae001 = '2013'
    var sql = "select "+a+" from  (select "+bb+"  from "+tablename1+" a where " +condition1.name+" = '"+condition1.value+"' " +
        " and " +condition3.name+" like '"+condition3.value+"%' )b, " +tablename+" a where  "+condition1.name+" = '"+condition1.value+"'  and " +condition2.name+" = '"+condition2.value+"'";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });
};
Pag.ejaccrecord=  function  get(a,bb,tablename,tablename1,condition1,condition2, condition3,callback) {
    //select a.bab063 pass,a.aae387 nrate,b.jiben from
//  (select  ifnull((select aae019  jiben   from ic11 a where aac001 = '10213101510005302120'  and aae041 like '2013%' ),0) jiben)b, nc33 a where  aac001 = '10213101510005302120'  and aae001 = '2013'

    var sql = "select "+a+" from  (select ifnull((select  sum("+bb+")  from "+tablename1+" a where " +condition1.name+" = '"+condition1.value+"' " +
        " and " +condition3.name+" like '"+condition3.value+"%' ),0) jiben )b, " +tablename+" a where  "+condition1.name+" = '"+condition1.value+"'  and " +condition2.name+" = '"+condition2.value+"'";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results,fields);
        }
    });
};
Pag.zaccyue1=  function  get(a,tablename,condition1,dd,callback) {
    // select aae001,aac001,ifnull(aae262,0)+ifnull(aae263,0)+ifnull(aae264,0)+ifnull(aae265,0)+ifnull(bac032,0)
    //   +ifnull(bac036,0) yue from ic02 where aac001="00010042410000000304" ORDER BY aae001 desc limit 1
    var sql = "select "+a+" from  " +tablename+"  where  "+condition1.name+" = '"+condition1.value+"'  order by " +dd+" desc  limit 1";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results[0],fields);
        }
    });
};
Pag.zaccyue11=  function  get(aa,tablename11,condition11,condition22,callback) {
    //select bae014,aac001,sum(ifnull(aae081,0)+ifnull(aae083,0)+ifnull(bac033,0)+ifnull(bac037,0)) yue from ic42
    // where aac001="00010042410000000304" and bae014 like "2000%"
    var sql = "select "+aa+" from  " +tablename11+"  where  "+condition11.name+" = '"+condition11.value+"'  and " +condition22.name+"  like '"+condition22.value+"%'";
    console.log(sql);
    client.getDbCon(sql,function(err,results,fields){
        if(err){
            throw err;
        }else{
            return  callback(err,results[0],fields);
        }
    });
};