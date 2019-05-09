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


const User = mongoose.model('User', userSchema)
module.exports = User

