var mysql = require("mysql2");

var connection; 

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "Steel2Rust",
        database: "burgersdb"
    })
    connection.connect(function (err){
        if (err) {
            console.error("Error connecting: " + err.stack);
            return;
        }
        console.log("Connected as id" + connection.threadId)
    });
}

module.exports = connection;