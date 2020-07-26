const express = require("express")
const router = express.Router();
const burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.all(function(data) {
        const hbsObject = { burgers: data};
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("api/burgers", function(req, res) {
    console.log(req.body)
    burger.create([
        "burgerType"
    ], [req.body.name], function(result) {
        console.log(res)
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);
    console.log(req.body.devoured)
    burger.update({
        devoured:true
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(400).end();
        }else {
            res.status(200).end();
        }
    });
});

router.delete("api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

module.exports = router;