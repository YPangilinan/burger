var connection = require("../config/connection.js");

//HELPER FUNCTIONS TAKEN FROM CATS APP ACTIVITY

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
};

//ORM FOR SQL STATEMENT FUNCTIONS
var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
          if (err) throw err;
          else {
            cb(result);
          }
        });
    },
    insertOne: function(tableName, column, value, cb){
      var queryString = "INSERT INTO ?? (??) VALUES (?)";
      connection.query(queryString, [tableName, column, value], function(err,result){
        if (err) throw err;
        else{
          cb(result);
        };
      });
    },
    updateOne: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
};

module.exports = orm;