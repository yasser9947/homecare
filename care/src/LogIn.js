import React, { Component } from 'react'
import { Input, Col, FormGroup, Label, Button} from '../node_modules/reactstrap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class LogIn extends Component {

  submitHandler = (e) => {

console.log(e)

  }

  
  render() {
    return (
      <div>
    <>
    <Col sm={3} md={4} className="mx-auto">
     <FormGroup>
          <Label for="exampleEmail" sm={2}>Email</Label>
        <Input name="email" onChange ={this.props.changeHandler} />
     </FormGroup>
     <FormGroup>
          <Label for="exampleEmail" sm={2}>Password</Label>
          <Input  onChange ={this.props.changeHandler} name="password" type="password" />
      </FormGroup>
      <Link className="thenave" to="/" ><Button onClick= {this.props.login} color="primary" size="lg" block> Login </Button></Link>
     </Col>
    </>
      </div>
    )
  }
}
