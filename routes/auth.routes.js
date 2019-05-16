const User = require('../models/user');
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const passport = require('passport');

const passportHelper = require('../config/passport')


router.get('/', (request, response, next) => {
  //custom jwt authenticate
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    console.log("got here")
    if (err) { return response.status(400).json({ message: err }) }

    if (info !== undefined) {
      return response.json({ message: info.message })
    } else {
      User.find({})
        .then((user) => {
          response.json({ user: user });
        })

    }


  })(request, response, next)


})

router.post('/register', (req, res) => {

  let data = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    nationality: req.body.nationality,
    ID: req.body.ID,
    user_rule: req.body.user_rule
  }

  let user = new User(data)

  console.log(user)
  user.save()
    .then(() => {
      res.status(200).json({ user: user, message: "Registered Successfully" })
    })
    .catch(err => {
      console.log(err)
      res.status(201).json({ message: "You are not Allowed to Register", err: err })
    })
})



router.post('/login', (req, res) => {

  passport.authenticate('local', { session: false }, (err, user, info) => {

    if (err || !user) {
      console.log(info.message)
      return res.status(401).json({
        message: info ? info.message : 'Login failed',
        user: user
      });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        console.log(err)
        return res.status(401).json({ message: err });
      }
      // generate a signed json web token with the contents of user object and return it in the res
      user.password = '' //remove password
      console.log(user)
      const token = jwt.sign(user.toJSON(), 'your_jwt_secret', { expiresIn: 60 * 60 });
      return res.status(200).json({ user, token });
    });
  })(req, res);

})


module.exports = router