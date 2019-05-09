const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy
const User=require('../models/user')

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
   
        user.verifyPassword(password, user.password, (err, response) =>{
         if(err) { return done(null, false)}
         
         if(!response){ return done(null, false, { message : "not a match"})
        }else{
         return done(null, user);
        }
      
        })
        
        
      });
    }
   ));



   passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  module.exports = passport