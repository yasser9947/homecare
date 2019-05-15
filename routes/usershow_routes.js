const express = require('express')
const router = require('express').Router()

//models
const Appointment=require('../models/appointment')
const Medicine=require('../models/medicine')
const User=require('../models/user')

//middleware 
// router.use(express.json())

router.get('/all', (req, res)=>{
    User.find(({user_rule : 1}))
    .then((users) =>{
      console.log(users)
        res.json({users})
    })
    .catch(err => {   
    })
  })
  router.get('/alD', (req, res)=>{
    User.find(({user_rule : 2}))
    .then((users) =>{
      console.log(users)
        res.json({users})
    })
    .catch(err => {   
    })
  })
  router.get('/apo', (req, res)=>{
    Appointment.find()
    .then((apo) =>{
      console.log(apo)
        res.json({apo})
    })
    .catch(err => {   
    })
  })

  
  module.exports = router