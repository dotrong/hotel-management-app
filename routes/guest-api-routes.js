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

    app.post("/api/guests/signup", function(req, res){

    var message = '';
    req.body.user_role = 'customer';

    db.guests.findOne({

        attributes: ['password','user_role'],
        where: {
            username: req.body.username
            
        }
        }).then(function(results) {
            //res.json(results);
            if (results) {
                res.redirect("/");
            }
        });

    db.guests.create(req.body).then(function(results) {
        message = "Succesfully! Your account has been created.";
        res.json(results);
    });

});

//-----------------------------------------------login page call------------------------------------------------------
app.post("/api/guests/login", function(req,res) {
    var message = '';
    var sess = req.session; 
    var name= req.body.username;
    var pass= req.body.password;
    

    db.guests.findOne({

        attributes: ['password','user_role','id'],
        where: {
            username: name,
            password: pass
        }
        }).then(function(results) {
            //res.json(results);
            if (results) {
                req.session.userid = results.id;
                req.session.username = results.username;
                req.session.userRole = results.user_role;

                if (results.user_role === 'customer') {
                    res.redirect("/customer");
                }
                else if (results.user_role === 'manager') {
                    res.redirect("/manager");
                }             
            }
            else {

                console.log("no user");
                res.json({results})

            }
        });

    });
}