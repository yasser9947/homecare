import React, { Component } from 'react'
import { Col, Row, Form, FormGroup, Label, Input
  // Button 
} from 'reactstrap';
// import {
//     Link
//   } from 'react-router-dom'
import axios from 'axios'



export default class Editprofile extends Component {

  constructor(props) {
    super(props);

    this.onChangeEmail= this.onChangeEmail.bind(this);
    this.onChangePassword= this.onChangePassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeNationality= this.onChangeNationality.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        nationality:''
    }
}

componentDidMount() {
  console.log("ebere",this.props.match.params.id)
    axios.get('http://localhost:4001/user/auth/user/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                email: response.data.email,
                password: response.data.password,
                firstname: response.data.firstname,
                lastname: response.data.lastname,
                nationality: response.data.nationality
            })   
        })
        .catch(function (error) {
            console.log(error);
        })
}

onChangeEmail(e) {
    this.setState({
        email: e.target.value
    });
}

onChangePassword(e) {
    this.setState({
        password: e.target.value
    });
}

onChangeFirstName(e) {
    this.setState({
        firstname: e.target.value
    });
}

onChangeLastName(e) {
  this.setState({
      lastname: e.target.value
  });
}

onChangeNationality(e) {
    this.setState({
        nationality: e.target.value
    });
}

onSubmit(e) {
    e.preventDefault();
    const obj = {
        email: this.state.email,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        nationality: this.state.nationality
    };
    console.log(obj);
    axios.post('http://localhost:4001/user/auth/user/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/user/auth/');//return to user profile
}



  render() {
    return (


      <div>
      <h1> Edit Profile</h1>
      <Form onSubmit={this.onSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="Email"  value={this.state.email} onChange={this.onChangeEmail} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="Password" value={this.state.password} onChange={this.onChangePassword} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
        <Col md={6}>
            <FormGroup>
              <Label for="firstname">First Name</Label>
              <Input type="text" name="username" id="State" value={this.state.firstname} onChange={this.onChangeFirstName} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
            <Label for="lastname">Last Name</Label>
              <Input type="text" name="username" id="State" value={this.state.lastname} onChange={this.onChangeLastName} />
            </FormGroup>
          </Col>
        </Row>
        
        <FormGroup>
         </FormGroup>

        <Row form>
        <Col md={3}>
        <FormGroup>
          <Label for="nationality">Nationality</Label>
          <Input type="text" name="nationality" id="nationality" value={this.state.nationality} onChange={this.onChangeNationality} />
        </FormGroup>
        </Col>
         
        </Row>
       
        <div className="thenave"><input type="submit" value="edit"/> 
        </div>
      </Form>
    </div>

    )
  }
}




