const express = require('express')
const PORT = process.env.PORT || 4000
const server = express()

//const session = require('express-session')
//jwt and passports
// const jwt = require('jsonwebtoken')
//const passport = require('passport')
//mongoose connection
//const mongooseConnect = require('./config/mongodb')


//allows json to be sent to via request express
server.use(express.json())

//create session for passport
// server.use(session({
//  secret : "test",
//  resave : false,
//  saveUninitialized : true
// }))

// server.use(passport.initialize())
// server.use(passport.session())


//routes
// server.use('/api/auth', require('./routes/auth.routes'))
// server.use('/api/games', passport.authenticate('jwt', {session: false}), require('./routes/games.routes'))




//cannot find route
server.get('/', (request, response) => {
    console.log("server is running")
   })
server.use('*', (request, response) => {
 response.status(404).json({message : "Data not found!"})
})

server.listen(PORT, () => console.log(`connected to ${PORT}`))