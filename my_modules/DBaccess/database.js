
var client, mysql, settings;

client = null;

mysql = require('mysql');

settings = require('./settings');
client = mysql.createConnection(settings.db);
client.connect(function (err) {
    if(err){
        throw err;
    }
}   );

exports.getDbCon = function(sql,callback) {
console.log(sql);
    client.query(sql, function (err, results,fields) {
        if(err) {throw  err;}
        else{
            console.log(results);
            return callback(err,results,fields);
        }
    });
};

