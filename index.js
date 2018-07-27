const express = require('express');
const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20");
const keys = require('./config/keys');
// require("./services/passport"); // just to import the code

const app = express(); // creates new express application

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback2'
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; // PORT is a capital latter to tell the developers, they should do not change it

app.listen(PORT); // it is a workaround , it tells Node to look at port 5000
