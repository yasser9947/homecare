import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Collapse, Button, CardBody, Card } from 'reactstrap';


export default class FOQ extends Component {


  constructor(props) {
    super(props);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);

    this.state = {
      collapse1: false,
      collapse2: false,
      collapse3: false
    };
  }

  toggle1 = (e) => {
    let data = { ...this.state }
    data.collapse1 = !data.collapse1
    this.setState(data)
  }
  toggle2 = (e) => {
    let data = { ...this.state }
    data.collapse2 = !data.collapse2
    this.setState(data)
  }
  toggle3 = (e) => {
    let data = { ...this.state }
    data.collapse3 = !data.collapse3
    this.setState(data)
  }
  toggle4 = (e) => {
    let data = { ...this.state }
    data.collapse4 = !data.collapse4
    this.setState(data)
  }
  toggle5 = (e) => {
    let data = { ...this.state }
    data.collapse5 = !data.collapse5
    this.setState(data)
  }
  toggle6 = (e) => {
    let data = { ...this.state }
    data.collapse6 = !data.collapse6
    this.setState(data)

  }

  render() {



    return (
      <div className="questions">
        <div>
          <br></br>
          <Button color="info" onClick={this.toggle2} style={{ marginBottom: '1rem',marginLeft: '1rem', width: '600px', textAlign: 'left' }}> Question 1 - How can I book a doctor?  </Button>
          <Collapse isOpen={this.state.collapse2}>
            <Card>
              <CardBody>
              To book a doctor, you have to sign in in order to make an appointment.
  </CardBody>
            </Card>
          </Collapse>

          <br></br>
          <br></br>
          <Button color="info" onClick={this.toggle1} style={{ marginBottom: '1rem', marginLeft: '1rem', width: '600px', textAlign: 'left' }}> Question 2 - Is the appointmens based on special condition?  </Button>
          <Collapse isOpen={this.state.collapse1}>
            <Card>
              <CardBody>
                Usually for first time appointment, a doctor will arrive to you for a general check-up. 
           </CardBody>
            </Card>
          </Collapse>

<br></br>
<br></br>
<Button color="info" onClick={this.toggle3} style={{ marginBottom: '1rem',marginLeft: '1rem', width: '600px', textAlign: 'left' }}> Question 3 - How can I see appointments status?  </Button>
          <Collapse isOpen={this.state.collapse3}>
            <Card>
              <CardBody>
                You can check your appointmen status through "User Profile". 
           </CardBody>
            </Card>
          </Collapse>

          <br></br>
          <br></br>
<Button color="info" onClick={this.toggle4} style={{ marginBottom: '1rem',marginLeft: '1rem', width: '600px', textAlign: 'left' }}> Question 4 - Can I edit my personal information?  </Button>
          <Collapse isOpen={this.state.collapse4}>
            <Card>
              <CardBody>
                Sure, you can edit ypur personal information through "User Profile".  
           </CardBody>
            </Card>
          </Collapse>
          <br></br>
          <br></br>
<Button color="info" onClick={this.toggle5} style={{ marginBottom: '1rem',marginLeft: '1rem', width: '600px', textAlign: 'left' }}> Question 5 - How can I check the medicine provided by the doctor?  </Button>
          <Collapse isOpen={this.state.collapse5}>
            <Card>
              <CardBody>
                After the doctor leaves, you will find a prescription from your doctor in your profile. 
           </CardBody>
            </Card>
          </Collapse>

          <br></br>
          <br></br>
          <Button color="info" onClick={this.toggle6} style={{ marginBottom: '1rem',marginLeft: '1rem', width: '600px', textAlign: 'left' }}> Question 6 - Can I cancel my order?  </Button>
          <Collapse isOpen={this.state.collapse6}>
            <Card>
              <CardBody>
                Sure, you can show, edit, and cancel your order. 
           </CardBody>
            </Card>
          </Collapse>
        </div>

<br></br> <br></br>
      </div>
    )
  }
}