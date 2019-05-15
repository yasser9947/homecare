import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; 
import Editprofile from './Editprofile'

export default class UserProfile extends Component {
  render() {
    // var name = this.props.user
    console.log(this.props.match.params.id)
    console.log(this.props.match.params);
    
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
                  
                </div>
              </div>
              <div class="col-xs-12 divider text-center">
                <div class="col-xs-12 col-sm-4 emphasis">
                  <h2><strong>  </strong></h2>
                  <p><h5>requst a appointment</h5></p>
                  <button class="btn btn-success btn-block"><span class="fa fa-plus-circle"></span> requst </button>
                </div>
                <div class="col-xs-12 col-sm-4 emphasis">
                  <h2><strong></strong></h2>
                  <p><h5>update </h5></p>
                  <br/>
                  <button class="btn btn-info btn-block"><span class="fa fa-user"></span> click to update </button>
                </div>
                <div class="col-xs-12 col-sm-4 emphasis">
                  <h2><strong></strong></h2>
                  <p><h5>view the appointment </h5></p>
                  <button class="btn btn-info btn-block"><span class="fa fa-user"></span> click to seel </button>
                </div>
                <h2><strong></strong></h2>
                <div class="col-xs-12 col-sm-4 emphasis">
                  <h2><strong></strong></h2>
                  <p><h5>Edit Profile</h5></p>
                  <br/>
                  {/* <button class="btn btn-info btn-block">*/}
                  <a href={`/editprofile/${this.props.match.params.id}`} className=" btn btn-info btn-block nav-link">
                  <span class="fa fa-user">  
                    Click to Edit
                  </span> 
                  </a>
                  {/* </button> */}
                </div>

                

              </div>

            </div>
          </div>
        </div>
      </div>
      </Router>
    )
  }
}
