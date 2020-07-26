const mysql = require("mySql");

var connection; 

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgersDB"
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