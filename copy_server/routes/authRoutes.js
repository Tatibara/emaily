const passport = require("passport");

module.exports = app => {
  // routehandlers :)
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout(); // this function also automatically attached to req obj by passport. It takes the cookies that contains a userid and kills it
    //res.send(req.user);
    res.redirect('/');
  });

  app.get("/api/current_user", (req, res) => {
    /* res.send(req.user); */
    res.send(req.user); // passport authomatically attaches user
  });
};
