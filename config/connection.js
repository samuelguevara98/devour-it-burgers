const mysql = require("myql");

var connection; 

if (process.envJAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "steel2rust",
        database: "burgers_db"
    })
    connection.connection(function (err){
        if (err) {
            console.error("Error connecting: " + err.stack);
            return;
        }
        console.log("Connected as id" + connection.threadId)
    });
}

module.exports = connection;