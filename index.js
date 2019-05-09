require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000
const app = express()
const mongoose = require('mongoose');
var cors = require('cors')
const user_routes=require('./routes/user_routes')
const expressLayout = require('express-ejs-layouts')
const passport = require('passport')
const session = require('express-session')


//models
// const Appointment=require('./models/appointment')
// const Medicine=require('./models/medicine')
// const User=require('./models/user')



//middleware
app.use(cors()) 
app.use(express.urlencoded({ extended: false }));   
app.use(express.json())
//Body parser allows json to be passed into express
// app.use(bodyParser.urlencoded({ extended: false }));    
// app.use(bodyParser.json());
app.use(express.static('public'));
//allows json to be sent to via req express

app.use(expressLayout)


app.use(session({
    secret : process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
   }))
   
   app.use(passport.initialize())
   app.use(passport.session())
   
   app.use((req, res, next)=>{
    res.locals.currentUser = req.user
    next()
   })


//connect to mongoose
mongoose.connect('mongodb://localhost/home_care',
{useNewUrlParser: true})
.then(()=> {console.log('db connected')},
 err => { console.log(err)})
//fix database index from deprecated mongoose
mongoose.set('useCreateIndex', true)

app.use('/user',user_routes)

//cannot find route
app.get('/', (req, res) => {
    console.log("server is running")
    res.send("server is running")
    })

app.use('*', (req, res) => {
    res.status(404).json({message : "Data not found!"})
})

app.listen(PORT, () => console.log(`connected to ${PORT}`))