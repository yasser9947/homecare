import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
  Link
} from 'react-router-dom'
import axios from 'axios'
export default class Createdoctor extends Component {
    state ={
        user: ""
    }
    
    changeHandler = (e) => {
        // console.log(e.target.value);
        let data = { ...this.state }
        data[e.target.name] = e.target.value
        data.user_rule = 1
    
        this.setState(data)
        // console.log(this.state);
    
      }
    registerHandler = (e) => {
    console.log()
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      nationality: this.state.nationality,
      user_rule: 2
    }

    axios.post('http://localhost:4001/user/auth/register', user)
      .then(response => {
        console.log(response)
        console.log("masseg")

      })
      .catch(err => (console.log("yaa not working" + err)))
  }
  render() {
    return (
      <div>
 <h1> Create doctor</h1>
        <Form className = "creetdoctor">
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
          <Link className="thenave" to="/" ><Button onClick={this.props.registerHandler}>Sign in</Button></Link>{' '} 
        </Form>
              </div>
    )
  }
}
