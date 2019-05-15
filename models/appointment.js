const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
 date : { type: Date, required: true},
 doctor_id:{type: Schema.Types.ObjectId, ref : 'User'},
 patient_id:{type: Schema.Types.ObjectId, ref : 'User'},
 reservation_reason:{type:String},
 cancellation_reason:{type:String},
 medicines:{ type: Schema.Types.ObjectId, ref : 'Medicine'},
 status:{type: Number}
},{timestamps : true})





const Appointment = mongoose.model('Appointment', appointmentSchema)
module.exports = Appointment


