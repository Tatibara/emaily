const passport = require("passport");

module.exports = app => {
  // routehandlers :)
  app.get('/', (req, res) => {
    res.send({ hi: 'there' });
  });
  
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'), // is a middleware, it takes an incomming request, it further authenticate the user. it takes the code inside the url and goes and fetch users profile and it calls a callback in the googles strategy. when it finished it passes the request to the next middleware inside the flow
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout(); // this function also automatically attached to req obj by passport. It takes the cookies that contains a userid and kills it
    //res.send(req.user); is nothing, passport destroy req.user
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    /* res.send(req.user); */
    res.send(req.user); // passport authomatically attaches user to req object
  });
};
