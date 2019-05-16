import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/patient.css'
import jwt_decode from 'jwt-decode'
import { getToken } from '../services/auth';
import Appointment from './Appointment'

// const Appointment = props => (
//     <tr>
//         <td className={props.appointment.canceled ? 'canceled' : ''}>{props.appointment.date}</td>
//         <td className={props.appointment.canceled ? 'canceled' : ''}>{props.appointment.reservation_reason}</td>
//         {/* <td className={props.appointment.canceled ? 'canceled' : ''}>{props.appointment.cancellation_reason}</td> */}
//         <td>
//             <Link to={"/edit/"+props.appointment._id}>Edit</Link>
//         </td>
//     </tr>
// )

export default class AllAppointment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appointments: []
        };
    }
    componentDidMount() {
        
        const user = jwt_decode(getToken())._id 

        //axios.get('http://localhost:4001/user/auth/appointment/patient/'+user)
        axios.get('http://localhost:4001/appointment/patient/'+user)
            .then(response => {
                console.log(response.data.appointment);
                
                this.setState({ appointments: response.data.appointment });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    componentDidUpdate(){
        const user = jwt_decode(getToken())._id 
        //axios.get('http://localhost:4001/user/auth/appointment/patient/'+user)
        // axios.get('http://localhost:4001/appointment/patient/'+user)
        // .then(response => {
        //     // console.log("hi");
            
        //     this.setState({ appointments: response.data });
        //     // console.log(this.state);
            
        // })
        // .catch(function (error){
        //     console.log(error);
        // })
    }

    appointmentList() {
        // return this.state.appointments.map(function(currentAppointment, i){
        //     return <Appointment appointment={currentAppointment} key={i} />;
        // })
        console.log("this is the",this.state.appointments);
        
    }

  render() {
    let appts=  this.state.appointments.map((appt, index)=>{
return <Appointment appointment={appt} key={index} />
      })
// console.log(this.state.appointments);

    return (
      <div>
        <h3>Appointments List</h3>
        {/* <table>
            <thead>
        <th>Date</th>
    <th>Reason</th> 
    <th>Action</th> 
    </thead>
    <tbody>
  </tbody>
        </table> */}
        {appts}

                    
                    
               
      </div>
    )
  }
}







