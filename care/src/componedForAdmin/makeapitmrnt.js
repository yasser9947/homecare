import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
  Link
} from 'react-router-dom'
import axios from 'axios'
import { Table } from 'reactstrap';

export default class AllPaition extends Component {
    state = {
apo : [],
users :[],
doc: []
        
    }

showAll = () =>{
 
}
componentDidMount(){
  axios.get('http://localhost:4001/usershow/apo')
  .then(res => {
let deta = {...this.state} 
deta.apo = res.data.apo
this.setState(deta)

    console.log(res)

  })
  .catch(err => (console.log( + err)))
  axios.get('http://localhost:4001/usershow/all')
  .then(res => {
let deta = {...this.state} 
deta.users = res.data.users
this.setState(deta)

    console.log("masseg")

  })
  .catch(err => (console.log( + err)))
  axios.get('http://localhost:4001/usershow/ald')
  .then(res => {
let deta = {...this.state} 
deta.doc = res.data.users
this.setState(deta)

    console.log("masseg")

  })
  .catch(err => (console.log( + err)))
}
idToname =() =>{
    this.state.apo.forEach(element => {
        this.state.users.forEach(ele => {
        if (element.patient_id === ele._id){
            element.name = ele.username
        }

        });
});

} 

  render() {
      this.idToname()
    //   user._id
    console.log(this.state.users)
    console.log(this.state.apo)
var doc = this.state.doc.map((el ,i) =>{

return <option value={i}>{el.username}</option>
})
    var Data = this.state.apo.map((ele, i) => {
        var status;
        if (ele.status == 0 ){
            status = "requst"
        }
        else if  (ele.status == 1 ){

        }
        else {

        }

      return <tr>
        
      <th scope="row">{i+1}</th>
      <td>{ele.name}</td>
      <td>{ele.reservation_reason}</td> 
      <td>{ele.date}</td>
      <td>{status}</td>

      <td><select name="doc">
     
      {doc}
 
</select></td>
      <td>{status}</td>

     
    </tr>
  })
    return (
      <div>
 <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th> reasons</th>
            <th>Data and time</th>
            <th>status</th>
            <th>change status</th>
            <th>choose  doctor</th>


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
