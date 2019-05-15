import React, { Component } from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { getToken } from '../services/auth';

export default class NewAppointment extends Component {

    constructor(props) {
        super(props);

        this.onChangeDate= this.onChangeDate.bind(this);
        this.onChangeReservationReason= this.onChangeReservationReason.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            date: '',
            patient_id:'',
            reservation_reason: '',
            canceled: false
        }
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onChangeReservationReason(e) {
        this.setState({
            reservation_reason: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Date: ${this.state.date}`);
        console.log(`Reservation Reason: ${this.state.reservation_reason}`);
        const user = jwt_decode(getToken())._id
        console.log(user)
        const obj = {
            date: this.state.date,
            patient_id: user,
            reservation_reason: this.state.reservation_reason,
        };
        console.log(`Patient_id: ${user}`);

        // this.setState({
        //     date: '',
        //     reservation_reason: '',
        //     patient_id:'',
        //     canceled: false
        // })
        axios.post('http://localhost:4001/appointment/', obj)
       // axios.post('http://localhost:4001/user/auth/appointment/', obj)
            .then(res => console.log(res.data));
        
        // this.props.history.push('/user/auth/');//return to user profile
        this.props.history.push('/')
    }

  render() {
    return (
        <div style={{marginTop: 10}}>
        <h3>Create New Appointment</h3>
        <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Date: </label>
                <input  type="Date"
                        className="form-control"
                        value={this.state.date}
                        onChange={this.onChangeDate}
                        />
            </div>
            <div className="form-group">
                <label>Reservation Reason: </label>
                <input 
                        type="text" 
                        className="form-control"
                        value={this.state.reservation_reason}
                        onChange={this.onChangeReservationReason}
                        />
            </div>
            
            <div className="form-group">
                <input onClick={this.onSubmit} type="submit" value="Request New Appointment" className="btn btn-primary" />
            </div>
        </form>
    </div>
    )
  }
}
