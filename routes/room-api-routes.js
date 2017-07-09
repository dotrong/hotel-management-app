var db = require("../models");

module.exports = function(app) {
  // Find all rooms and return them to the user with res.json
    app.get("/api/rooms", function(req, res) {
        db.Room.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/rooms/:id", function(req, res) {
     // Find one room with the id in req.params.id and return them to the user with res.json
        db.Room.findOne({
        where: {
            id: req.params.id
        }
        }).then(function(results) {
            res.json(results);
        });
    });

    app.post("/api/rooms", function(req, res) {
        // Create a room with the data available to us in req.body
        console.log(req.body);
        db.Room.create(req.body).then(function(results) {
            res.json(results);
        });
    });

    app.delete("/api/reservations/:id", function(req, res) {
        // Delete room with the id available to us in req.params.id
        db.Room.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    //update room information
    app.put("/api/rooms", function(req, res) {
    db.Room.update(
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