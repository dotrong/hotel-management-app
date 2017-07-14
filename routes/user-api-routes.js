var db = require("../models");

module.exports = function(app) {
  // Find all users and return them to the frontend with res.json
    app.get("/api/users", function(req, res) {
        db.users.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/users/:id", function(req, res) {
     // Find one user with the id in req.params.id and return them to the frontend with res.json
        db.users.findOne({
        where: {
            id: req.params.id
        }
        }).then(function(results) {
            res.json(results);
        });
    });

    app.post("/api/users", function(req, res) {
        // Create a new user with the data available to us in req.body
        console.log(req.body);
        db.users.create(req.body).then(function(results) {
            res.json(results);
        });
    });

    app.delete("/api/users/:id", function(req, res) {
        // Delete user with the id available to us in req.params.id
        db.users.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    //update user information
    app.put("/api/users", function(req, res) {
    db.users.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    //login 
    app.post("/api/users/login", function(req, res) {
        // get login info in req.body
        
        console.log(req.body);
        

        //var sess = req.session; 

        db.users.findOne({

            attributes: ['password','user_role'],
            where: {
                username: req.body.username,
                password: req.body.password
            }
            }).then(function(results) {
                //res.json(results);
                if (results) {
                    
                    //user successfully loging
                    req.session.userId = results.id;
                    req.session.user = results.username;
                    req.session.userRole = results.user_role;
                    
                  //  res.redirect('/home/dashboard');
                  //  res.render('/home/dashboard');
                //res.json(results)
                    if (results.user_role === 'manager') {
                        console.log("redirect for manager");
                         res.redirect('/manager');
                    }
                    else if (results.user_role === 'customer') {
                        console.log("redirect for customer");
                        res.redirect('/customer');
                    }

                    // console.log("user exist");
                    // res.end();
    
                }
                else {
                    console.log("no user");
                    res.json({results})

                } 

            });

    });
}