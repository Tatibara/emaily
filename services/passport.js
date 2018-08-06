const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");
const keys = require("../config/keys");

// to get an access to users model class
const User = mongoose.model("users"); // is a model class, gives us a relation or handler to the underline collection (save or persist)
// one arguments means we want to featch and two arguments means we want to create model class

// the purpose of serializeUser is take a user model and to generate a tocken, that will be passed into cookie
passport.serializeUser((user, done) => {
  done(
    null /* error object, there is no error */,
    user.id /*this id is authomatically created by mongoDB*/ 
    // we use user.id to generate a tocken for cookie
  );
});

// take a tocken from a cookie (id) and get a user model
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user); // authomatically attaches the user to req
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //we already have a record with the given profile ID
        return done(null, existingUser); // telling to passport that we are done without error and hier is a user that we just found, we are finished
        // return is here for refactoring, so you do not need to write else constructor
      }

      const user = await new User({ googleId: profile.id }).save(); // it returns a promise, we are always deal with promises when we are working with DB
      // new User({ googleId: profile.id }) - creates new instance of a user (new mongoose model instance)
      // .save() - makes it persist to db, otherwise it is only in our javascript world
      done(null, user); // it is also async
      // user is another model instance we get after save

      /* User.findOne({ googleId: profile.id }) // (a signal when a query is completed) this query returns a promise, a tool that we use for handlening a async code
        .then(existingUser => {
          if (existingUser) {
            // record instance or null if the record will not found
            //we already have a record with the given profile ID
            done(null, existingUser); // telling to passport that we are done without arror and hier is a user that we just found, we are finished
          } else {
            new User({ googleId: profile.id })
              .save() // it returns a promise, we are always deal with promises when we are working with DB
              .then(user => done(null, user)); // it is also async
          }
        }); */

      /* console.log('access Token', accessToken); // wich allowes us to do something with users account if he gave us a permission for it.
        console.log('refresh Token', refreshToken);
        console.log('profile', profile); */
    }
  )
); // to specify what strategy to use
