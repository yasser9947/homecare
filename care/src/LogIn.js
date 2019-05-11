import React, { Component } from 'react'
import { Input, Col, FormGroup, Label, Button} from '../node_modules/reactstrap'

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
          <Label for="exampleEmail" sm={2}>Email</Label>
        <Input name="email" />
     </FormGroup>
     <FormGroup>
          <Label for="exampleEmail" sm={2}>Password</Label>
          <Input name="password" type="password" />
      </FormGroup>
      <Button  color="primary" size="lg" block> Login </Button>
     </Col>
    </>
      </div>
    )
  }
}
