const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10 

const userSchema = new Schema({
 email : { type: String, required: true, unique : true},
 username : { type: String, required: true, unique : true},
 password : { type: String, required: true},
 nationality:{type: String},
 user_rule:{type: Number,default:1},//0 admin , 1 patient, 2 doctor
 ID:{type:Number},
 //appointments : [{ type: Schema.Types.ObjectId, ref: 'Appointment' }]

},{timestamps : true})


userSchema.pre('save', function(next){
    let user = this
   
     if(user.password && user.isModified()){
      bcrypt.hash(user.password, saltRounds).then( hash =>{
       user.password = hash
       next()
      }).catch(err => console.log(err))
    }
   })
   
   
   userSchema.methods.verifyPassword = (plainPassword, hashedPassword, next) => {
   
     bcrypt.compare(plainPassword, hashedPassword, (err, response) => {
       if(err) { 
         return next(err) 
       }
       return next(null, response)
     })
   }

   
const User = mongoose.model('User', userSchema)
module.exports = User

