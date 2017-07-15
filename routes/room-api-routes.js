var db = require("../models");

module.exports = function(app) {
  // Find all rooms and return them to the user with res.json
    app.get("/api/rooms", function(req, res) {
        db.rooms.findAll({}).then(function(results) {
            res.json(results);
        });
    });

      // Find all rooms and return them to the user with res.json
    app.get("/api/rooms/available", function(req, res) {
        db.rooms.findAll({
            where: {
            room_status: 0
        }
        }).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/rooms/:id", function(req, res) {
     // Find one room with the id in req.params.id and return them to the user with res.json
        db.rooms.findOne({
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
        db.rooms.create(req.body).then(function(results) {
            res.json(results);
        });
    });

    app.delete("/api/reservations/:id", function(req, res) {
        // Delete room with the id available to us in req.params.id
        db.rooms.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    //update room information
    app.put("/api/rooms", function(req, res) {
    db.rooms.update(
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