import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './css/Homepage.css';

export default class HomePage extends Component {
    render() {
        return (
     

          <div>
<div className="center-img">
<Carousel>
  <Carousel.Item>
    <img
      className="slideshow"
      src="https://cdn.kinsights.com/cache/01/fb/01fb731325cf3e0f2366235cb4975fd3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, ullam numquam aspernatur impedit at consectetur quidem dolorem, eaque magni ad suscipit perspiciatis alias itaque vero aliquid quia quae quasi excepturi?.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>

    
    <img
      className="slideshow"
      src="https://cdn.kinsights.com/cache/01/fb/01fb731325cf3e0f2366235cb4975fd3.jpg"
      alt="second slide"
    />
   

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet quae vero, nisi impedit iure cum tenetur, sequi porro recusandae quaerat dicta perferendis quas dolorum autem ipsum assumenda adipisci non.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slideshow"
      src="https://cdn.kinsights.com/cache/01/fb/01fb731325cf3e0f2366235cb4975fd3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi earum eligendi nemo. Sed, qui vel veniam quos, modi non quis molestiae deleniti, officia quas nemo doloremque praesentium. Blanditiis, quod nisi.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>





          </div>
    

        )
    }
}
