import React, { Component } from 'react'
import "./css/Admin.css"
import AllPaition from './componedForAdmin/AllPaition'
import Createdoctor from './componedForAdmin/Createdoctor'
import ToolApoimont from './componedForAdmin/ToolApoimont'
import UpdateDoctor from './componedForAdmin/UpdateDoctor'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// var view = "this.state.name"
var view = ""
export default class Admin extends Component {
    state = {
        name: 0,
    }
    clicklhandler = (e) => {
        // this.state.name = e.target.id
        let data = { ...this.state }
        data.name = e.target.id
        this.setState(data)
        console.log(this.state.name)

    }
    render() {

        switch (this.state.name) {
            case "1":
                view = <Createdoctor />
                break;
            case "2":
                view = <UpdateDoctor />
                break;
            case "3":
                view = <ToolApoimont />
                break;
                case "4":
                view = <ToolApoimont />
                break;
            case "5":
                view = <AllPaition />
                break;
            default:
                view = ""
            // code block
        }
        return (
            <Router>

            <div>
                <div class="contenerpord">
                    <div class="left">
                        <div class="O">
                            <h2>name</h2>
                            <h4>Admin</h4>
                        </div>
                      
                        <div onClick={this.clicklhandler} id="1" class="1 thec"><h5 >creact a doctor</h5></div>
                        <div onClick={this.clicklhandler} id="2" class="2 thec"><h5>see all doctors</h5></div>
                        <div onClick={this.clicklhandler} id="3" class="3 thec"><h5>all apoitmint and update</h5></div>
                        <div id="4" onClick={this.clicklhandler} class="4 thec"><h5>make apoitment</h5> </div>
                        <div onClick={this.clicklhandler} id="5" class="5 thec"><h5>see all pittion</h5></div>
                        <div id="5" class="6 thec"><h5>update</h5></div>
                    </div>


                    <div class="rihgt">
                        {view}

                    </div>

                </div>
            </div>
            </Router>

        )
    }
}
