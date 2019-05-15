import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
  Link
} from 'react-router-dom'
import axios from 'axios'
import { Table } from 'reactstrap';

export default class AllPaition extends Component {
    state = {
users : []
        
    }

showAll = () =>{
 
}
componentDidMount(){
  axios.get('http://localhost:4001/usershow/all')
  .then(res => {
let deta = {...this.state} 
deta.users = res.data.users
this.setState(deta)

    console.log("masseg")

  })
  .catch(err => (console.log( + err)))
}

  render() {
    console.log(this.state.users)
    var Data = this.state.users.map((ele, i) => {

      return <tr>
      <th scope="row">{i+1}</th>
      <td>{ele.username}</td>
      <td>{ele.nationality}</td> 
      <td>{ele.email}</td>
      <td>{ele.createdAt}</td>
     
    </tr>
  })
    return (
      <div>
 <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th> nationality</th>
            <th>email</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>
      
          {Data}
        </tbody>
      </Table>
            </div>
    )
  }
}
