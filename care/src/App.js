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
import AdminTool from './admin_tool'


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


  submitHandler = (e) => {
    axios.post('loca/api/appointment', { name: this.state.gamename }, header)
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
    console.log()
    let user = { 
      email: this.state.email,
      username : this.state.username, 
      password: this.state.password, 
      nationality: this.state.nationality, 
      user_rule: this.state.user_rule 
    }

    axios.post('http://localhost:4001/user/auth/register', user)
      .then(response => {
        // let data = { ...this.state }
        // data.email = response.data.email
        // data.password =response.data.password
        // data.nationality =response.data.nationality
        // data.user_rule = response.data.user_rule
        // data.isAuthenticated = true
        // data.hasError = false
        // console.log("running thr register")

        console.log(response)
        console.log("masseg")

      })
      .catch(err => (console.log("yaa not working" + err)))
  }

  render() {

    console.log(this.state);

    return (

      <Router>

        <div class="fixApp">
          {/* navbar */}

          <nav className="navbar navbar-light navlogo" >

            <img src="http://beyondfaithhomecare.com/wp-content/themes/beyondfaith/images/LifeCareHomeCare_COLOR_logo_BF%20Tag-01.png" className="" height='80' width='170' alt="" />

            <div className="rightNav">



              {/*                   <LogIn  />
 */}

              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#"> <Link className="thenave" to="/" > Home Page</Link>{' '}</a></li>
                  <li class="breadcrumb-item"><a href="#"> <Link className="thenave" to="/SingUp">rigester</Link>{' '}</a></li>


                  <li class="breadcrumb-item active" aria-current="page"> <Link className="thenave" to="/logIn">log in</Link>{' '}</li>
                </ol>
              </nav>
            </div>
          </nav>

          <div class="medle">
            <Route exact path="/" component={HomePage} />
            <Route path="/SingUp" render={() => <SingUp registerHandler={this.registerHandler} user={this.state} change={this.changeHandler} />} />
            <Route path="/LogIn" render={() => <LogIn changeHandler={this.changeHandler} />} />
            {/* registerHandler */}
            <Route path="/ContactUS" component={ContactUS} />
            <Route path="/FOQ" component={FOQ} />
            <Route path="/AdminTool" component={AdminTool} />
          </div>



          {/* footer */}

          <footer className="page-footer font-small blue pt-4">

            <div className="container-fluid text-center text-md-left">

              <div className="row">

                <div className="col-md-6 mt-md-0 mt-3">

                  <h5 className="text-uppercase">Footer Content</h5>
                  <p>Here you can use rows and columns to organize your footer content.</p>

                </div>

                <hr className="clearfix w-100 d-md-none pb-3" />

                <div className="col-md-3 mb-md-0 mb-3">

                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="#!"><Link to="/ContactUS">ContactUS</Link>{' '}</a>
                    </li>

                    <a href="#!"><Link to="/FOQ">FOQ</Link>{' '}</a>
                    <li>
                      <a href="#!">Link 3</a>
                    </li>
                    <li>
                      <a href="#!">Link 4</a>
                    </li>
                    <li>
                      <a href="#!"><Link  to="/AdminTool">Admin Dashboard</Link>{' '}</a>
                    </li>
                  </ul>

                </div>



              </div>

            </div>



          </footer>

        </div>

      </Router>

      // footer 



    )
  }
}
