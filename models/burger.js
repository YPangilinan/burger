var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
    },
    insertOne: function(col,vals,cb){
        orm.insertOne("burgers", col, vals, function(res){
          cb(res);
        });
    },
    updateOne: function(colVal, condition, cb){
      orm.updateOne("burgers", colVal, condition, function(res){
        cb(res);
      });

    },
    deleteOne: function(condition, cb){
      orm.deleteOne("burgers", condition, function(res){
        cb(res);
      });
    }
};

module.exports = burger;