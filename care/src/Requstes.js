import React, { Component } from 'react'
import { Input, Col, FormGroup, Label, Button} from '../node_modules/reactstrap'
import {
  BrowserRouter as Router,
  Route,
  Link

} from 'react-router-dom'


export default class Requstes extends Component {
  render() {
    
    return (
<div>
        <h1> In order to request a doctor, please fill the form</h1>
        <form>


          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Choose your preferred date and time</label>
              <input type="datetime-local" />
</div>
            </div>

            <div class="form-group">
              <div class="form-check">

                <input type="radio" name="reason" checked/> Regular Checkup or Physical exam <br/>
                  <input type="radio" name="reason"/ > Abdominal Pain <br/>
                  <input type="radio" name="reason"/ > Otorhinolaryngology <br/>
                    <input type="radio" name="reason" value="other"/> Other
              
                    
    </div>
  </div>
                    <button type="submit" class="btn btn-primary" value="Send"> Submit </button>

</form>
</div>


    )
  }
}
