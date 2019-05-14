import React, { Component } from 'react'

export default class NewAppointment extends Component {

    constructor(props) {
        super(props);

        this.onChangeDate= this.onChangeDate.bind(this);
        this.onChangeReservationReason= this.onChangeReservationReason.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            date: '',
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
        
        this.setState({
            date: '',
            reservation_reason: '',
            // cancellation_reason: '',
            canceled: false
        })
    }

  render() {
    return (
        <div style={{marginTop: 10}}>
        <h3>Create New Appointment</h3>
        <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Date: </label>
                <input  type="date"
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
                <input type="submit" value="Request New Appointment" className="btn btn-primary" />
            </div>
        </form>
    </div>
    )
  }
}
