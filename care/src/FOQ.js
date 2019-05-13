import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Collapse, Button, CardBody, Card } from 'reactstrap';


export default class FOQ extends Component {


  constructor(props) {
    super(props);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);

    this.state = { collapse1: false ,
      collapse2: false,
      collapse3: false };
  }

  toggle1 =(e) => {
    let data = {...this.state}
    data.collapse1 = !data.collapse1
this.setState(data)
  }
  toggle2 =(e) => {
    let data = {...this.state}
    data.collapse2 = !data.collapse2
this.setState(data)
  }
  render() {



    return (
      <div>
    <div>
        <Button color="primary" onClick={this.toggle2} style={{ marginBottom: '1rem' }}>problem1</Button>
        <Collapse isOpen={this.state.collapse2}>
          <Card>
            <CardBody>
              problem1 
   </CardBody>
          </Card>
        </Collapse>
        <Button color="primary" onClick={this.toggle1} style={{ marginBottom: '1rem' }}>problem2</Button>
        <Collapse isOpen={this.state.collapse1}>
          <Card>
            <CardBody>
problem 2
            </CardBody>
          </Card>
        </Collapse>
      
      </div>

      </div>
    )
  }
}
