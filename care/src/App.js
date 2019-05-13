import React, { Component } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; import { getToken, setToken, logout } from './services/auth'

import './App.css';
import HomePage from './HomePage'
import LogIn from './LogIn'
import SingUp from './SingUp'
import ContactUS from './ContactUS'
import FOQ from './FOQ'
import Requstes from './Requstes'
import Terms from './Terms'


// 
let header = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getToken()}`
  }
}


export default class App extends Component {
  state = {
    users: [],
    appointment: [],
    medicine : [] ,
    user: "",
    errorMsg: '',
    isAuthenticated: false,
    hasError: false,

  }
  // get the json file axios 
  changeHandler = (e) => {
    console.log(e.target.value);
    let data = { ...this.state }
    data.name = e.target.value

    this.setState(data)
// console.log(this.state);

  }

  getGames = () => {
    axios.get('/api/games', header)
      .then(response => {
        console.log(response.data)
        if (response.data.games.length > 0) {

          let data = { ...this.state }
          data.games = response.data.games

          this.setState(data)
        }
      })
      .catch()
  }

  submitHandler = (e) => {
    axios.post('/api/games', { name: this.state.gamename }, header)
      .then(response => {

        let data = { ...this.state }
        data.games.push(response.data.game)

        this.setState(data)
      })
      .catch()
  }

  loginHandler = (e) => {
    axios.post('/api/auth/login', { email: this.state.email, password: this.state.password })
      .then(response => {
        console.log(response.data)
        if (response.data.token) {
          setToken(response.data.token)

          let data = { ...this.state }
          data.user = response.data.user
          data.isAuthenticated = true
          data.hasError = false

          this.setState(data)

          this.getGames()
        }

      })
      .catch(err => {
        let data = { ...this.state }
        data.hasError = true
        this.setState(data)

      })
  }

  logout = () => {
    logout()
    let data = { ...this.state }
    data.isAuthenticated = false
    data.user = ""
    data.email = ""
    data.password = ""
    data.games = []

    this.setState(data)
  }
  registerHandler = (e) => {
    axios.post('/api/auth/', {})
      .then(response => {

      })
      .catch()
  }

  render() {
    
console.log(this.state.name);

    return (
      
      <Router>

        <div class="fixApp">
          {/* navbar */}

          <nav className="navbar navbar-light navlogo" >

            <img src="./HomeCare_logo.png" className="" height='80' width='170' alt="" />

            <div className="rightNav">




{/*                   <LogIn  />
 */}

              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#"> <Link className="thenave" to="/" > HomeCare </Link>{' '}</a></li>
                  <li class="breadcrumb-item active" aria-current="page"> <Link className="thenave" to="/logIn"> Make an appointment</Link>{' '}</li>
                  {/* <li class="breadcrumb-item"><a href="#"> <Link className="thenave" to="/SingUp">Register</Link>{' '}</a></li> */}
                  <li class="breadcrumb-item"><a href="#"> <Link className="thenave" to="/Register">Register</Link>{' '}</a></li>
                  <li class="breadcrumb-item active" aria-current="page"> <Link className="thenave" to="/logIn">Log-In</Link>{' '}</li>
                </ol>
              </nav>
            </div>
          </nav>

          <div class="medle">
            <Route exact path="/" component={HomePage} />
            <Route path="/SingUp" component={SingUp} />
            <Route path="/LogIn" render={() => <LogIn changeHandler = {this.changeHandler} />} />
            <Route path="/ContactUS" component={ContactUS} />
            <Route path="/FOQ" component={FOQ} />
            <Route path="/Requstes" component={Requstes} />
            <Route path="/Terms" component={Terms} />
          </div>



          {/* footer */}
<div className="navbar navbar-light navlogo"> 
          <footer className="page-footer font-small blue pt-4">

            <div className="container-fluid text-center text-md-left">

              <div className="row">

                <div className="col-md-6 mt-md-0 mt-3">

                  <h5 className="text-uppercase">Footer Content</h5>
                  <p>Here you can use rows and columns to organize your footer content.</p>
                  <p> © Copyright 2019. All Rights Reserved.  </p>

                </div>

                <hr className="clearfix w-100 d-md-none pb-3" />

                <div className="col-md-3 mb-md-0 mb-3">

                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="#!"><Link  to="/ContactUS">Contact US</Link>{' '}</a>
                    </li>
                   
                      <a href="#!"><Link  to="/FOQ">FAQ</Link>{' '}</a>
                    <li>
                      <a href="#!">  <Link  to="/"> Terms and Conditions </Link> {' '} </a>
                    </li>
                    
                  </ul>
                 

                </div>



              </div>

            </div>

          

          </footer>
          </div>
        </div>

      </Router>

      // footer 



    )
  }
}
