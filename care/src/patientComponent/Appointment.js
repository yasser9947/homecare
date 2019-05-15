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
    return (
      <div>
        <table>
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
        </table>
      </div>
    )
  }
}
