import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import HomePage from './HomePage'
export default class App extends Component {
  state = {
    cares: []

  }

  getCare = () => {

    axios.get("/")
      .then(data => {
        console.log("from my api", data.data)
        let temp = { ...this.state } // copy
        temp.todos = data.data.todos // set to api response
        this.setState(temp) //set the state
      })
      .catch(err => console.log(err))
  }
  componentDidMount() {
    this.getCare() // load on component mount
  }


  render() {


    return (
      <div>
        {/* navbar */}
        <nav className="navbar navbar-light navlogo" >

          <a className="navbar" >
            <img src="http://beyondfaithhomecare.com/wp-content/themes/beyondfaith/images/LifeCareHomeCare_COLOR_logo_BF%20Tag-01.png" className="" height='80' width='170' alt="" />

          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="">test</a>
              </li>
              <li className="nav-item">
                <a href="">test</a>
              </li>
            </ul>
          </div>
        </nav>


<HomePage />        
      </div>

    )
  }
}
