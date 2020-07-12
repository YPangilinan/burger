var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      res.render("index", hbsObject);
    });
  });

router.post("/", function(req,res){
  burger.insertOne(["burger_name","devoured"], [req.body.burger_name, "0"], function(data){
    res.redirect("/");
  });
});

router.put("/:id", function(req,res){
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
                  }, condition, function(){
                    res.redirect("/");
      });
});

router.delete("/:id", function(req,res){
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.deleteOne(condition, function(){
    res.redirect("/");
  });
});


module.exports = router;
