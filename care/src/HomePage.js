import React, { Component } from 'react'
import './css/Homepage.css';

export default class HomePage extends Component {
    render() {
        return (
            <div>
 <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/CARE_International_%E2%80%93_friendship_and_love.jpg/1200px-CARE_International_%E2%80%93_friendship_and_love.jpg" class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h1 class = "coloreP">A New Take On Childcare</h1>
                    <h2 class = "coloreP" >We meet all your child needs..</h2>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="http://www.lullabynannyshare.com.au/uploads/75725/ufiles/outdooractivities.jpg" class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h1 class = "coloreP">Easily find a good Caregiver</h1>
                    <h2 class = "coloreP">With CAREDOM, finding a caregiver is not a problem at all..</h2>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://www.earlyyearscareers.com/eyc/wp-content/uploads/2016/03/happy-nursery-enviroment-page-2.jpg" class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h1 class = "coloreP">Professional care services</h1>
                    <h2 class = "coloreP">Total Childcare Solutions on one click..</h2>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
     
    

        )
    }
}
