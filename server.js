process.env.NODE_ENV=process.env.NODE_ENV||'development';

var    express=require('./config/express'),
    passport=require('./config/passport');

var app=express();
var passport=passport();

app.listen(3000);
console.log('server 3000');
module.exports=app;
/*
var http = require('http');
var URL = require('url');

http.createServer(function(req, res){
    var arg = url.parse(req.url).path;
    console.log(arg);

    if(arg=='/signin'){
        return 'views/UserManage.html';
    }
    if(arg=='/signup'){
        return  'views/signup.html';
    }
    var p = URL.parse(testUrl);
    console.log(p.href); //取到的值是：http://localhost:8888/select?aa=001&bb=002
    console.log(p.protocol); //取到的值是：http:
    console.log( p.hostname);//取到的值是：locahost
    console.log(p.host);//取到的值是：localhost:8888
    console.log(p.port);//取到的值是：8888
    console.log(p.path);//取到的值是：/select?aa=001&bb=002
    //然后就可以根据所得到的数据处理了
})
*/
