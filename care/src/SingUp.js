import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
  Link
} from 'react-router-dom'
export default class SingUp extends Component {
  render() {
    return (

      <div>
        <h1> Sign Up </h1>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="e.g example@gmail.com" onChange={this.props.change} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="******" onChange={this.props.change} />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="examplenationality">Nationality</Label>
            <Input type="text" name="nationality" id="examplenationality" placeholder="" onChange={this.props.change} />
          </FormGroup>

          <Row form>
           
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">Name</Label>
                <Input type="text" name="username" id="exampleState" onChange={this.props.change} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity" onChange={this.props.change} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" />
              </FormGroup>
            </Col>
          </Row>
          {/* <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>Check me out</Label>
          </FormGroup> */}
          <Link className="thenave" to="/" ><Button onClick={this.props.registerHandler}> Register </Button></Link>{' '} 
        </Form>
      </div>
    )
  }
}
