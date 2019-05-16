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
    this.onChangeNationality= this.onChangeNationality.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        email: '',
        password: '',
        username: '',
        nationality:''
    }
}

componentDidMount() {
  console.log("ebere",this.props.match.params.id)
   // axios.get('http://localhost:4001/user/auth/user/'+this.props.match.params.id)
   axios.get('http://localhost:4001/profile/'+this.props.match.params.id)
        .then(response => {
          console.log(response.data)
          this.setState({
                username: response.data.user.username,
                email: response.data.user.email,
                password: response.data.user.password,
                nationality: response.data.user.nationality
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
        username: e.target.value
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
        username: this.state.username,
        nationality: this.state.nationality
    };
    console.log(obj);
   // axios.post('http://localhost:4001/user/auth/user/'+this.props.match.params.id, obj)
     axios.put('http://localhost:4001/profile/'+this.props.match.params.id, obj)
    
   .then(res=>{
    console.log(res.data);
    alert("updated successfully")
   })
    
    this.props.history.push('/user/auth/');//return to user profile
}


  render() {
    return (


      <div>
      <h1> Update Profile</h1>
      <Form onSubmit={this.onSubmit}>
        <Row form>
        <Col md={4}>
            <FormGroup>
              <Label for="username">Name</Label>
              <Input type="text" name="username" id="State" value={this.state.username} onChange={this.onChangeFirstName} />
            </FormGroup>
          </Col>    
        <FormGroup>
         </FormGroup>
        <Col md={4}>
        <FormGroup>
          <Label for="nationality">Nationality</Label>
          <Input type="text" name="nationality" id="nationality" value={this.state.nationality} onChange={this.onChangeNationality} />
        </FormGroup>
        </Col>
        </Row>

        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="Email"  value={this.state.email} onChange={this.onChangeEmail} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="Password" value={this.state.password} onChange={this.onChangePassword} />
            </FormGroup>
          </Col>
        </Row>
       
        <div className="form-group">
          <input type="submit" value="Update Profile" className="btn btn-primary" />
        </div>
      </Form>
    </div>

    )
  }
}




