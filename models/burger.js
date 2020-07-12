var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
    },
    insertOne: function(col,vals,cb){
        orm.insertOne("burger", col, vals, function(res){
          cb(res);
        });
    },
    updateOne: function(colVal, condition, cb){
      orm.updateOne("burger", colVals, condition, function(res){
        cb(res);
      });

    },
    deleteOne: function(condition, cb){
      orm.deleteOne("burger", condition, function(res){
        cb(res);
      });
    }
};

module.exports = burger;