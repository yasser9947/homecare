import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/patient.css'

const Appointment = props => (
    <tr>
        <td className={props.appointment.canceled ? 'canceled' : ''}>{props.appointment.date}</td>
        <td className={props.appointment.canceled ? 'canceled' : ''}>{props.appointment.reservation_reason}</td>
        {/* <td className={props.appointment.canceled ? 'canceled' : ''}>{props.appointment.cancellation_reason}</td> */}
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
    componentDidMount() {
        axios.get('http://localhost:4001/user/auth/appointment/patient/')
            .then(response => {
                this.setState({ appointments: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    componentDidUpdate(){
        axios.get('http://localhost:4001/user/auth/appointment/patient/')
        .then(response => {
            this.setState({ appointments: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
    }

    appointmentList() {
        return this.state.appointments.map(function(currentAppointment, i){
            return <Appointment appointment={currentAppointment} key={i} />;
        })
    }

  render() {
    return (
      <div>
        <h3>Appointment List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Reservation Reason</th>
                            {/* <th>Cancellation Reason</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.appointmentList() }
                    </tbody>
                </table>
      </div>
    )
  }
}







