import React, { Component } from 'react'; import axios from 'axios'; import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { getToken, setToken, logout } from './services/auth';
import { Container, Row, Button, Col, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css'; import HomePage from './HomePage';
import LogIn from './LogIn'; import SingUp from './SingUp';
import ContactUS from './ContactUS';
import FOQ from './FOQ'; import Admin from './Admin';
import UserProfile from './UserProfile';
import Requstes from './Requstes'

import jwt_decode from 'jwt-decode'

import ModalExample from './js/jsHomePage'
 

import Editprofile from './Editprofile'



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
    medicine: [],
    user: "",
    errorMsg: '',
    isAuthenticated: false,
    hasError: false,
    user_id : 0 ,
    UserProfile:`/UserProfile/${this.user_id}`

  }
  // get the json file axios 
  changeHandler = (e) => {
    // console.log(e.target.value);
    let data = { ...this.state }
    data[e.target.name] = e.target.value
    data.user_rule = 1

    this.setState(data)
    // console.log(this.state);

  }
  // log in method
  loginHandler = (e) => {
    alert("Successfully Loged-in")
    axios.post('http://localhost:4001/user/auth/login', { email: this.state.email, password: this.state.password })
      .then(response => {
        console.log(response.data)
        if (response.data.token) {
          setToken(response.data.token)
          let data = { ...this.state }
          data.user = response.data.user
          data.isAuthenticated = true
          data.hasError = false
          this.setState(data)
          // this.getGames()
          console.log(response.data.user._id)
          console.log(response)
          window.location = `/UserProfile/${response.data.user._id}`
        }
      })
      .catch(err => {
        let data = { ...this.state }
        data.hasError = true
        this.setState(data)
        console.log("error")

      })

  }
  // log out method
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
  // register method
  registerHandler = (e) => {
    console.log()
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      nationality: this.state.nationality,
      user_rule: this.state.user_rule
    }

    axios.post('http://localhost:4001/user/auth/register', user)
      .then(response => {
        console.log(response)
        console.log("masseg")

      })
      .catch(err => (console.log("yaa not working" + err)))
  }
  // 
  componentDidMount() {
    if (getToken()) {
      let decoded = jwt_decode(getToken())
      let data = { ...this.state }
      data.user = decoded
      data.isAuthenticated = true
      
      this.setState(data)
      console.log("ok token here")
    }
  }

  render() {
// var id = `/UserProfile/${this.state.user_id}`
console.log( "id  " + this.state.user_id);


    var showLogin = (!this.state.isAuthenticated) ? <Link className="thenave" to="/logIn">log in</Link> : <Link className="thenave" to={this.state.UserProfile}> UserProfile</Link>

    const Logout = (this.state.isAuthenticated) ? <Link ><ModalExample logout={this.logout} /></Link> : <Link className="thenave" to="/SingUp"> Register </Link>



   

    return (


      <Router>

        <div class="fixApp">
          {/* navbar */}
          <nav className="navbar navbar-light navlogo" >
          
            <img src="https://images.vexels.com/media/users/3/161755/isolated/preview/58947b231e106b969b16035f37b6980f-heartbeat-with-medical-stethoscope-by-vexels.png" className="" height='80' width='170' alt="" />
            {/* <h3>HomeCare</h3> */}
            <div className="rightNav">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"> <Link className="thenave" to="/" > Home Page</Link>{' '}</li>
                  <li class="breadcrumb-item">  {Logout} {' '}</li>
                  <li class="breadcrumb-item active" aria-current="page"> {showLogin}{' '}</li>
                </ol>

              </nav>

            </div>

          </nav>
          <br></br>

          <div class="medle">
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/UserProfile" component={UserProfile} /> */}
            <Route path="/UserProfile/:id" render={(props) => <UserProfile user={this.state} {...props} />} />


            <Route path="/SingUp" render={() => <SingUp registerHandler={this.registerHandler} user={this.state} change={this.changeHandler} />} />
            <Route path="/LogIn" render={(props) => <LogIn changeHandler={this.changeHandler} {...props} login={this.loginHandler} />} />
            {/* registerHandler user*/}
            <Route path="/ContactUS" component={ContactUS} />
            <Route path="/FOQ" component={FOQ} />
            <Route path="/Requstes" component={Requstes} />
            <Route path="/Admin" render={(props) => <Admin user={this.state.user} />} />
            <Route path="/editprofile/:id" component={Editprofile} />

            {/* Editprofile */}
          </div>






          {/* footer */}
          <div className="breakline">
<img src="https://images.vexels.com/media/users/3/161755/isolated/preview/58947b231e106b969b16035f37b6980f-heartbeat-with-medical-stethoscope-by-vexels.png"  height='110' width='650' alt=""></img>
</div>
          <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
              <div className="row">
                
                <hr className="clearfix w-100 d-md-none pb-3" />
                <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase"> Important Links</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!"><Link to="/ContactUS">Contact Us</Link>{' '}</a>
                    </li>
                    <a href="#!"><Link to="/FOQ">FAQ</Link>{' '}</a>
                    
                    <li>
                      <a href="#!"> Terms and Conditions </a>
                    </li>
                    <li>
                      <a href="#!"><Link to="/Admin"> Admin Dashboard </Link>{' '}</a>
                    </li>
                  </ul>
                  


                  
                </div>
              </div>
            </div>
            
          </footer>
          <p>© Copyright 2019. All Rights Reserved. </p>
        </div>

      </Router>




    );
  }
}