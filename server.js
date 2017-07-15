var express = require('express');
var bodyParser = require("body-parser");

var app = new express();
var PORT = process.env.PORT||3000;

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));



// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//add authention part
var session = require('express-session');
app.use(session({
  secret: 'ucibootcamp',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

//end of authentication

// Import routes and give the server access to them.
//require("./routes/hotel-routes.js")(app);
require("./routes/guest-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/reservation-api-routes.js")(app);
require("./routes/room-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
//app.use("/", routes);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});