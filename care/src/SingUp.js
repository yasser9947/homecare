import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SingUp extends Component {
  render() {
    return (
      <div>
        <h1> Sing up page</h1>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={this.props.change} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={this.props.change} />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="examplenationality">Nationality</Label>
            <Input type="text" name="nationality" id="examplenationality" placeholder="1234 Main St" onChange={this.props.change} />
          </FormGroup>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity" onChange={this.props.change} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">Name</Label>
                <Input type="text" name="username" id="exampleState" onChange={this.props.change} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>Check me out</Label>
          </FormGroup>
          <Button onClick={this.props.registerHandler}>Sign in</Button>
        </Form>
      </div>
    )
  }
}
