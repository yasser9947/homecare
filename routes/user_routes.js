const express = require('express')
const router = require('express').Router()

//models
const Appointment=require('../models/appointment')
const Medicine=require('../models/medicine')
const User=require('../models/user')

//middleware 
router.use(express.json())

//router

//..................appointment..................

//appointment routes // display all appointments 
router.get('/appointment', (req, res)=>{
  Appointment.find({})
.then(appointments => {
 if(appointments.length < 1){
  return res.json({ appointments : appointments, message : 'nothing found'})
 }
 res.status(200).json({ appointments : appointments})
})
.catch(err => {
 res.send({ message : err})
})
})

//display all appointments belong to one doctor or user
router.get('/appointment/doctor/:id', (req, res) => {
  console.log(req.params.id)
  //Appointment.find({})
  // .populate('appointment','date')
  //.populate('appointment',null,{'doctor_id':req.body.id})

  // var query = Appointment.find({});
  // query.$where('this.doctor_id === req.body.id')

  Appointment.find({ doctor_id: req.params.id })
  
  .then(appointment =>{
    res.status(200).json({ appointment : appointment })
    return false
  })
  .catch(err => {
    res.json({ message: err })
    return false
  })
})


//display all appointments belong to one patient
router.get('/appointment/patient/:id', (req, res) => {
  console.log(req.params.id)
  Appointment.find({ patient_id: req.params.id })
  .then(appointment =>{
    res.status(200).json({ appointment : appointment })
    return false
  })
  .catch(err => {
    res.json({ message: err })
    return false
  })
})



//create appointment
router.post('/appointment', (req, res)=>{

let data = {
    date : req.body.date,
    doctor_id:req.body.doctor_id,
    patient_id:req.body.patient_id,
    reason:req.body.reason,
    medicines:null,
    status:0
  }

  let appointment = new Appointment(data)

  appointment.save()
  .then(()=> {
   
   res.status(200).json({ appointment : appointment, message: "saved"})
  })
  .catch(err => {
   res.send({ message : err})
  })
})

//show one appointment
router.get('/appointment/:id', (req, res)=>{
  Appointment.findById(req.params.id)
  .then((appointment) =>{
      res.json({appointment})
  })
  .catch(err => { 
    res.json({message : err}) 
  })
})

//update one appointment
router.put('/appointment/:id', (req, res)=>{
  let update = req.body
  console.log(req.params.id)
  Appointment.findByIdAndUpdate(req.params.id, update)
  .then(() =>{
      res.json({message: "update done"});
  })
  .catch(err => {
      res.json({message: "there is a problem", err : err})
  })
})

//delete one appointment by admin 
router.delete('/appointment/:id', (req, res)=>{
  Appointment.findByIdAndDelete(req.params.id)
  .then(() =>{
      res.json({message: "there is a problem",err : err});
  })
  .catch(err => {
      res.json({message: "delete done"})
  })  
  // res.status().json()
})


//cancel one appointment by user// patient
router.delete('/appointment/:id', (req, res)=>{
  Appointment.findById(req.params.id)
  .then(() =>{
    res.json({message: "cancel done"});
  })
  .catch(err => {
      res.json({message: "there is a problem", err : err})
  })   
  // res.status().json()
})

//..................user..................

//create new user 
// router.post('/', (req, res)=>{

//   let data = {
//     email : req.body.email,
//     username : req.body.username,
//     password : req.body.password,
//     nationality:req.body.nationality,
//     ID:req.body.ID,
//     user_rule:req.body.user_rule
//     }
  
//     let user = new User(data)
//     user.save()
//     .then(()=> {
//       res.status(200).json({ user : user, message: "saved"})
//     })
//     .catch(err => {
//       res.send({ message : err})
//     })
//   })

//display all users
  router.get('/', (req, res) => {

    User.find({})
    .then(user =>{
      res.status(200).json({ user : user })
      return false
    })
    .catch(err => {
      res.json({ message: err })
      return false
    })
  })

//display one user
  router.get('/:id', (req, res)=>{
    User.findById(req.params.id)
    .then((user) =>{
        res.json({user})
    })
    .catch(err => {   
    })
  })

//update user
  router.put('/:id', (req, res)=>{
    let update = req.body

    User.findByIdAndUpdate(req.params.id, update)
    .then(() =>{
        res.json({message: "update done"});
    })
    .catch(err => {
        res.json({message: "there is a problem"})
    })
})
//delete user
  router.delete('/:id', (req, res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(() =>{
        res.json({message: "there is a problem" ,err : err});
    })
    .catch(err => {
        res.json({message: "delete done"})
    })   
})
module.exports = router