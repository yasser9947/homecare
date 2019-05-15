import React, { Component } from 'react'
// import Spinner from 'react-bootstrap/Spinner'
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
      <div>
        <div>
          <br></br>
          <Button color="info" onClick={this.toggle2} style={{ marginBottom: '1rem',marginLeft: '1rem', width: '600px', textAlign: 'left' }}> Question 1 - How can I book a doctor?  </Button>
          <Collapse isOpen={this.state.collapse2}>
            <Card>
              <CardBody>
                Answer
  </CardBody>
            </Card>
          </Collapse>

          <br></br>
          <br></br>
          <Button color="info" onClick={this.toggle1} style={{ marginBottom: '1rem', marginLeft: '1rem', width: '600px', textAlign: 'left' }}> Question 2 - How can I book a doctor?  </Button>
          <Collapse isOpen={this.state.collapse1}>
            <Card>
              <CardBody>
                Answer 
           </CardBody>
            </Card>
          </Collapse>

<br></br>
<br></br>
<Button color="info" onClick={this.toggle3} style={{ marginBottom: '1rem',marginLeft: '1rem', width: '600px', textAlign: 'left' }}> Question 3 - How can I book a doctor?  </Button>
          <Collapse isOpen={this.state.collapse3}>
            <Card>
              <CardBody>
                Answer 
           </CardBody>
            </Card>
          </Collapse>

          <br></br>
          <br></br>
<Button color="info" onClick={this.toggle4} style={{ marginBottom: '1rem',marginLeft: '1rem', width: '600px', textAlign: 'left' }}> Question 4 - How can I book a doctor?  </Button>
          <Collapse isOpen={this.state.collapse4}>
            <Card>
              <CardBody>
                Answer 
           </CardBody>
            </Card>
          </Collapse>
          <br></br>
          <br></br>
<Button color="info" onClick={this.toggle5} style={{ marginBottom: '1rem',marginLeft: '1rem', width: '600px', textAlign: 'left' }}> Question 5 - How can I book a doctor?  </Button>
          <Collapse isOpen={this.state.collapse5}>
            <Card>
              <CardBody>
                Answer 
           </CardBody>
            </Card>
          </Collapse>

          <br></br>
          <br></br>
          <Button color="info" onClick={this.toggle6} style={{ marginBottom: '1rem',marginLeft: '1rem', width: '600px', textAlign: 'left' }}> Question 6 - How can I book a doctor?  </Button>
          <Collapse isOpen={this.state.collapse6}>
            <Card>
              <CardBody>
                Answer 
           </CardBody>
            </Card>
          </Collapse>
        </div>


      </div>
    )
  }
}