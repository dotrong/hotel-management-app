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
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Selection route
  app.get("/selection", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/selectroom.html"));
  });

  // Form route
  app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form.html"));
  });

  // Contact route
  app.get("/contact", function(req, res) {
    if (req.session.userRole == 'manager') {

      res.sendFile(path.join(__dirname, "../public/contact.html"));
    }
    else {
      res.sendFile(path.join(__dirname, "../public/form.html"));
    }
    
  });
};