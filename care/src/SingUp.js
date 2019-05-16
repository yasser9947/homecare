import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, 
  // FormText 
} from 'reactstrap';
import {
  Link
} from 'react-router-dom'
export default class SingUp extends Component {
  render() {
    return (

      <div>
        <h1> Sing up page</h1>
        <Form>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">Name</Label>
                <Input type="text" name="username" id="exampleState"  placeholder="Enter Your Name" onChange={this.props.change} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleCity">ID</Label>
                <Input type="text" name="ID" id="exampleCity"  placeholder="Enter Your ID" onChange={this.props.change} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your E-mail" onChange={this.props.change} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword"  placeholder="Enter Your Password" onChange={this.props.change} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
          <Col md={4}>
          <FormGroup>
            <Label for="examplenationality">Nationality</Label>
            <Input type="text" name="nationality" id="examplenationality" placeholder="Your Nationality " onChange={this.props.change} />
          </FormGroup>
          </Col>
          </Row>
          <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>Check me out</Label>
          </FormGroup>
          <Link className="thenave" to="/" ><Button onClick={this.props.registerHandler}>Sign in</Button></Link>{' '} 
        </Form>
      </div>
    )
  }
}
