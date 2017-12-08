var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObj = {
			burgers: data
		};
		res.render("index", hbsObj);
	});
});

router.post("/", function(req, res) {
	burger.insertOne([
		"burger_name", "devoured", 'burger_date'
		], [
		req.body.name, false, '17/8/12'
		], function() {
			res.redirect("/");
		});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	burger.updateOne({
		devoured: req.body.devoured
		}, condition, function() {
			res.redirect("/");
		});
});

module.exports = router;