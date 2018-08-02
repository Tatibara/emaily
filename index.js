const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User"); // tell mongoose that we want to create a users collection
require("./services/passport"); // just to import the code

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express(); // creates new express application

// to enable cookies in our application
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey]
  })
);

// telling passport to use cookies to manage autentification
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000; // PORT is a capital letter to tell the developers, they should not change it

app.listen(PORT); // it is a workaround , it tells Node to look at port 5000
