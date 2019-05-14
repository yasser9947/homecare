import React, { Component } from 'react';
import axios from 'axios';

export default class EdiAppointment extends Component {

    constructor(props) {
        super(props);

        this.onChangeDate= this.onChangeDate.bind(this);
        this.onChangeReservationReason= this.onChangeReservationReason.bind(this);
        this.onChangeCancellationReason = this.onChangeCancellationReason.bind(this);
        this.onChangeAppointmentCanceled = this.onChangeAppointmentCanceled.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            date: '',
            reservation_reason: '',
            cancellation_reason: '',
            canceled: false
        }


    }

    componentDidMount() {
        axios.get('http://localhost:4001/user/auth/appointment/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    date: response.data.date,
                    reservation_reason: response.data.reservation_reason,
                    cancellation_reason: response.data.cancellation_reason,
                    canceled: response.data.canceled
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeCancellationReason(e) {
        this.setState({
            cancellation_reason: e.target.value
        });
    }


    
    onChangeAppointmentCanceled (e) {
        this.setState({
            canceled: !this.state.canceled
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            date: this.state.date,
            reservation_reason: this.state.reservation_reason,
            cancellation_reason: this.state.cancellation_reason,
            canceled: this.state.canceled
        };
        console.log(obj);
        axios.post('http://localhost:4001/user/auth/appointment/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/user/auth/');//return to user profile
    }


  render() {
    return (
      <div>
        
        <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Date: </label>
                        <input  type="text"
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
                        <label>Cancellation Reason: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.cancellation_reason}
                                onChange={this.onChangeCancellationReason}
                                />
                    </div>
                    
                    
                    
                    
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.todo_priority==='Medium'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="canceledCheckbox"
                                onChange={this.onChangeTodoCompleted}
                                checked={this.state.todo_completed}
                                value={this.state.todo_completed}
                                />
                        <label className="form-check-label" htmlFor="canceledCheckbox">
                            Canceled
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Appointment" className="btn btn-primary" />
                    </div>
                </form>
      </div>
    )
  }
}
