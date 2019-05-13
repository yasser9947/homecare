import React, { Component } from 'react'
import { Input, Col, FormGroup, Label, Button} from '../node_modules/reactstrap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; import { getToken, setToken, logout } from './services/auth'


export default class LogIn extends Component {

  submitHandler = (e) => {

console.log(e)

  }

  // ChangeHandler = (e) =>{

    
  // }
  render() {
    return (
      <div>
    <>
    <Col sm={3} md={4} className="mx-auto">
     <FormGroup>
       <h3> Log-In</h3>
          <Label for="exampleEmail" sm={2}>Email</Label>
        <Input name="email" />
     </FormGroup>
     <FormGroup>
          <Label for="exampleEmail" sm={2}>Password</Label>
          <Input name="password" type="password" />
      </FormGroup>
      <Button  color="primary" size="lg" block> Login </Button>
<br></br>
      <p> Don't have an account? <Link to="/SingUp">Register</Link>  </p>

     </Col>
    </>
      </div>
    )
  }
}
