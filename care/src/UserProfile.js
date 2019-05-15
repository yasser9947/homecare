import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; 
import AllAppointment from './patientComponent/AllAppointment';
import EdiAppointment from './patientComponent/EdiAppointment';
import NewAppointment from './patientComponent/NewAppointment';

export default class UserProfile extends Component {
  render() {
    // var name = this.props.user
    return (
      <Router>
      <div class="container ">
        <div class="row">
          <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 theprofile ">
            <div class="well profile">
              <div class="col-sm-12">
                <div class="col-xs-12 col-sm-8">
                  <h2>
                    {/* {name} */}
                    name
                    </h2>
                  <p><strong>About: </strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis architecto necessitatibus natus accusantium culpa, placeat at non fuga facere, impedit velit libero ut molestias. Numquam ipsum est officia ducimus quam. </p>
                  <p><strong>city: </strong> </p>
                  <p><strong>status: </strong>
                    <span class="tags">1</span>
                    <span class="tags">2</span>
                    <span class="tags">3</span>
                    <span class="tags">4</span>
                  </p>
                </div>
                <div class="col-xs-12 col-sm-4 text-center">
                  <figure>
                    <img src="http://www.localcrimenews.com/wp-content/uploads/2013/07/default-user-icon-profile.png" alt="" class="img-circle img-responsive" />

                  </figure>
                </div>
              </div>
              <div class="col-xs-12 divider text-center">
                <div class="col-xs-12 col-sm-4 emphasis">
                  <h2><strong>  </strong></h2>
                  <p><h5>Request a appointment</h5></p>
                 <button class="btn btn-success btn-block"><span class="fa fa-plus-circle"></span> <Link to="/create"> Request </Link> </button>
                </div>
                <div class="col-xs-12 col-sm-4 emphasis">
                  <h2><strong></strong></h2>
                  <p><h5>update </h5></p>
                  <br/>
                  <button class="btn btn-info btn-block"><span class="fa fa-user"></span><Link to="/edit/:id"> Update </Link> </button>
                </div>
                <div class="col-xs-12 col-sm-4 emphasis">
                  <h2><strong></strong></h2>
                  <p><h5>view the appointment </h5></p>
                  <button class="btn btn-info btn-block"><span class="fa fa-user"></span><Link to="/"> View All Appointment </Link> </button>
                </div>

              </div>
            </div>
          </div>
          {/* <Link to="/" className="nav-link">All Appointments</Link>
          <Link to="/edit/:id" className="nav-link">Edit Appointment</Link>
          <Link to="/create" className="nav-link">New Appointment</Link> */}

        </div>
        <br/>
          <Route path="/" exact component={AllAppointment} />
          <Route path="/edit/:id" component={EdiAppointment} />
          <Route path="/create" component={NewAppointment} />
      </div>

      </Router>
    )
  }
}
