process.env.NODE_ENV=process.env.NODE_ENV||'development';

var    express=require('./config/express'),
    passport=require('./config/passport');

var app=express();
var passport=passport();

app.listen(3000);
console.log('server 3000');
module.exports=app;

