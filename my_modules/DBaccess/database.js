
var client, mysql, settings;

settings = require('./settings');

client = null;

mysql = require('mysql');

exports.getDbCon = function(database) {
    settings.db.database=database;

    if (client) {
        client = mysql.createConnection(settings.db);
        client.connect(function (err) {
            if(err){
                throw err;
            }
        }   );
    } else {
        client = new mysql.createConnection(settings.db);
        client.connect(function (err) {
            if(err){
                throw err;
            }
        }    );
    }

    return client;
};

