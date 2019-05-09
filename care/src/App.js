import React, { Component } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage'
import LogIn from './LogIn'
import SingUp from './SingUp'
import ContactUS from './ContactUS'
import FOQ from './FOQ'

export default class App extends Component {
  state = {
    cares: []

  }
  // get the json file axios 
  getCare = () => {

    axios.get("http://localhost:4000/appointment")
      .then(data => {
        console.log(data.data)
        console.log("running")
        // let temp = { ...this.state } // copy
        // temp.cares = data.data.cares // set to api response
        // this.setState(temp) //set the state
      })
      .catch(err => console.log(err))
  }
  // load on component mount

  componentDidMount() {
    this.getCare()
  }


  render() {


    return (
      <Router>

        <div class="fixApp">
          {/* navbar */}

          <nav className="navbar navbar-light navlogo" >

            <img src="http://beyondfaithhomecare.com/wp-content/themes/beyondfaith/images/LifeCareHomeCare_COLOR_logo_BF%20Tag-01.png" className="" height='80' width='170' alt="" />

            <div className="rightNav">





              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#"> <Link className="thenave" to="/"> Home Page</Link>{' '}</a></li>
                  <li class="breadcrumb-item"><a href="#"> <Link className="thenave" to="/SingUp">rigester</Link>{' '}</a></li>


                  <li class="breadcrumb-item active" aria-current="page"> <Link className="thenave" to="/logIn">log in</Link>{' '}</li>
                </ol>
              </nav>
            </div>
          </nav>

          <div class="medle">
            <Route exact path="/" component={HomePage} />
            <Route path="/SingUp" component={SingUp} />
            <Route path="/LogIn" component={LogIn} />
            <Route path="/ContactUS" component={ContactUS} />
            <Route path="/FOQ" component={FOQ} />

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
                      <a href="#!"><Link  to="/ContactUS">ContactUS</Link>{' '}</a>
                    </li>
                   
                      <a href="#!"><Link  to="/FOQ">FOQ</Link>{' '}</a>
                    <li>
                      <a href="#!">Link 3</a>
                    </li>
                    <li>
                      <a href="#!">Link 4</a>
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
