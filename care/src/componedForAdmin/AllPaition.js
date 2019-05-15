import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
  Link
} from 'react-router-dom'
import axios from 'axios'
export default class AllPaition extends Component {
    state = {

        
    }

showAll = () =>{
    axios.get('http://localhost:4001/user/all')
    .then(response => {
      console.log(response)
      console.log("masseg")

    })
    .catch(err => (console.log( + err)))
}

  render() {
    this.showAll()
    return (
      <div>
        AllPaition Component
      </div>
    )
  }
}
