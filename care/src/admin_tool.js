import React, { Component } from 'react'
import Axios from 'axios';
import App from './App'
import {Link} from 'react-router-dom';

const User = props => (
    <tr>
        <td>{props.user.todo_description}</td>
        
        <td>
            <Link to={"/edit/"+props.user._id}>Edit</Link>
        </td>
    </tr>
)


export default class admin_tool extends Component {
    

state={
    users:[]
}


componentDidMount(){
Axios.get('http://localhost:4000/user/')
.then(response=>{
    this.setState({users: response.data});
})
.catch(function(error){
        console.log(error);
    })
}
userList() {
    return this.state.users.map(function(currentUser, i){
        return <User user={currentUser} key={i} />;
    })
}

  render() {
    return (
      <div>
        Admin Dashboard 
        {this.userList()}
      </div>
    )
  }
}
