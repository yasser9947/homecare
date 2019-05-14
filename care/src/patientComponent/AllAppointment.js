import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const appointment = props => (
    <tr>
        <td className={props.canceled ? 'canceled' : ''}>{props.date}</td>
        <td className={props.canceled ? 'canceled' : ''}>{props.reservation_reason}</td>
        <td className={props.canceled ? 'canceled' : ''}>{props.cancellation_reason}</td>
        <td>
            <Link to={"/edit/"+props.appointment._id}>Edit</Link>
        </td>
    </tr>
)

export default class AllAppointment extends Component {

    constructor(props) {
        super(props);
        this.state = {appointments: []};
    }

    
  render() {
    return (
      <div>
        
      </div>
    )
  }
}







