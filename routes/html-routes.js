// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {

      res.sendFile(path.join(__dirname, "../public/index.html"));

  });

  // Login route
  // app.get("/login", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  // Selection route
  // app.get("/selection", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/selectroom.html"));
  // });

  // manager will see everything in this hotel: rooms, guests, reservations...
  app.get("/manager", function(req, res) {
    if (req.session.userRole === 'manager'){
      
      res.sendFile(path.join(__dirname, "../public/manager.html"));

    }
    else  {
      //res.json({message: "permission denied"});
      console.log(req.session.userRole);
      res.redirect("/");
    }

  });

  // customer route, will see reservation/make new reservation
  app.get("/customer", function(req, res) {

    if (req.session.userRole === 'customer') {
      res.sendFile(path.join(__dirname, "../public/customer.html"));

    }
    else {
      res.redirect("/");
    }

  });

    app.get("/registration", function(req, res) {
 
     res.sendFile(path.join(__dirname, "../public/registration.html"));

  });
};