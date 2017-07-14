var db = require("../models");

module.exports = function(app) {
  // Find all guests and return them to the user with res.json
    app.get("/api/guests", function(req, res) {
        console.log(db.guests);
        db.guests.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/guests/:id", function(req, res) {
     // Find one guest with the id in req.params.id and return them to the user with res.json
        db.guests.findOne({
        where: {
            id: req.params.id
        }
        }).then(function(results) {
            res.json(results);
        });
    });

    app.post("/api/guests", function(req, res) {
        // Create a guest with the data available to us in req.body
        console.log(req.body);
        db.guests.create(req.body).then(function(results) {
            res.json(results);
        });
    });

    app.delete("/api/guests/:id", function(req, res) {
        // Delete the guest with the id available to us in req.params.id
        db.guests.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    //update guest information
    app.put("/api/guests", function(req, res) {
    db.guests.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        }).then(function(results) {
            res.json(results);
        });
    });
}