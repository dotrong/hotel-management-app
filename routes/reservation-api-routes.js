var db = require("../models");

module.exports = function(app) {
  // Find all reservation and return them to the user with res.json
    app.get("/api/reservations", function(req, res) {
        db.reservations.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/reservations/:id", function(req, res) {
     // Find one reservation with the id in req.params.id and return them to the user with res.json
        db.reservations.findOne({
        where: {
            id: req.params.id
        }
        }).then(function(results) {
            res.json(results);
        });
    });

    app.post("/api/reservations", function(req, res) {
        // Create a reservation with the data available to us in req.body
        console.log(req.body);
        db.reservations.create(req.body).then(function(results) {
            res.json(results);
        });
    });

    app.delete("/api/reservations/:id", function(req, res) {
        // Delete reservation with the id available to us in req.params.id
        db.reservations.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    //update reservation information
    app.put("/api/reservations", function(req, res) {
    db.reservations.update(
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