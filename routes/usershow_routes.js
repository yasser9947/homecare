const express = require('express')
const router = require('express').Router()

//models
const Appointment=require('../models/appointment')
const Medicine=require('../models/medicine')
const User=require('../models/user')

//middleware 
router.use(express.json())

