import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/patient.css'
export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        appointment: []
    };
}

  render() {
    var titel="" ;
    var reason="";
    if (this.props.appointment.canceled){
titel="Cancellation Reason: ";
reason=this.props.appointment.cancellation_reason;
    }
    else{
      titel="Reservation_reason: ";
      reason=this.props.appointment.reservation_reason;
    }
    return (
      <div>
        {/* <table>
<tbody>
<tr>
  <td>  {this.props.appointment.date}</td>
  <td>  {this.props.appointment.reservation_reason}</td>

  <td> <Link to={"/edit/"+this.props.appointment._id}>Edit</Link></td>
</tr>
</tbody>

        </table> */}
        <pre> 
     <p className={this.props.appointment.canceled ? 'canceled' : ''}>Date: {this.props.appointment.date}</p> 
     </pre> 
    
     <pre> 
     <p>{titel}{reason}</p> 
    </pre> 
    <pre> 
            <Link to={"/edit/"+this.props.appointment._id}>Edit</Link>
            </pre>   
      <hr/>
        {/* <table>
        <tbody>
  <tr>
    <th>Date</th>
    <th>Reason</th> 
    <th>Action</th> 
  </tr>
  <tr>
    <td>{this.props.appointment.date}</td>
    <td>{this.props.appointment.reservation_reason}</td> 
    <td>
            <Link to={"/edit/"+this.props.appointment._id}>Edit</Link>
        </td>
  </tr>
  </tbody>
        </table> */}
      </div>
    )
  }
}
