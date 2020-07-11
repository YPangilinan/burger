var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var burgObject = {
        burger: data
      };
      console.log(burgObject);
      res.render("index", burgObject);
    });
  });


module.exports = router;
