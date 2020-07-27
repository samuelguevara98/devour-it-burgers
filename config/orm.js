var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    // column1=value, column2=value2,...
    var arr = [];
    for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}

var orm = {
    all:function(tableInput, cb){
        connection.query("SELECT * FROM ??", [tableInput], function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString, "***********");
        console.log(vals, "VALS****")
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {
        console.log(objColVals, "OBJCOLVALS")
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString, "QUERYSTRING");
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        }); 
    },
    delete: function(table, condition, cb) {
        console.log(queryString, "queryStringGGGGgggG")
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function( err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;