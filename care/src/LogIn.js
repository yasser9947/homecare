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
// const log = (this.state.isAuthenticated) ? <Link className="thenave" to="/" ><Button onClick= {this.props.login} color="primary" size="lg" block> Login </Button></Link> : null
    return (
      <div>
    <>
    <Col sm={3} md={4} className="mx-auto">
     <FormGroup>
       <h3> Log-In </h3>
          <Label for="exampleEmail" sm={2}>Email</Label>
        <Input name="email" onChange ={this.props.changeHandler} />
     </FormGroup>
     <FormGroup>
          <Label for="exampleEmail" sm={2}>Password</Label>
          <Input  onChange ={this.props.changeHandler} name="password" type="password" />
      </FormGroup>
      <Button  onClick = {this.props.login}color="primary" size="lg" block> Login </Button>

<br></br>
      <p> Don't have an account? <Link to="/SingUp">Register</Link>  </p>

     </Col>

    </>
      </div>
    )
  }
}
