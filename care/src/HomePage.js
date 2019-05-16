import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './css/Homepage.css';

export default class HomePage extends Component {
    render() {
        return (
     

          <div className="font">
<div className="center-img">
<Carousel>
  <Carousel.Item>
    <img
      className="slideshow"
      src="https://cdn.kinsights.com/cache/01/fb/01fb731325cf3e0f2366235cb4975fd3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1> Right Care </h1>
      <h4> HomeCare will provide you with the right care needed supervised by specialist doctors</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>

    
    <img
      className="slideshow"
      src="https://cdn.kinsights.com/cache/01/fb/01fb731325cf3e0f2366235cb4975fd3.jpg"
      alt="second slide"
    />
   

    <Carousel.Caption>
      <h1>Right Time</h1>
      <h4> Don't worry about hospital time waiting, HomeCare will provide you with fast service accoirding to your time appointment </h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slideshow"
      src="https://cdn.kinsights.com/cache/01/fb/01fb731325cf3e0f2366235cb4975fd3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Right Place</h1>
      <h4> HomeCare will provide you with excellent care on your place, you are just a click away! </h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<br></br>
<br></br>

<h1> About <b>HomeCare</b></h1>
<br></br>
<h4> is a healthcare website that provide you with medical service at your house. 
Through our innovative and easy to use interface, 
you are clicks away from gaining access to quality medical care 
at the convenience of your own home </h4>
<br></br> <br></br>
<h1> How <b>HomeCare</b> Works</h1>
<h3> <b> 1) </b> Sign Up and Enter your Details </h3> 
<h3> <b> 2) </b> Book an Appoitnment on your desired Date&Time </h3>
<h3> <b> 3) </b> Wait for your Doctor to Arrive!</h3>

<br></br><br></br><br></br><br></br>

 
 <br></br>


          </div>
    

        )
    }
}
