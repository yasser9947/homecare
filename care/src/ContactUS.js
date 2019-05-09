import React, { Component } from 'react'
import './css/ContactUS.css';

export default class ContactUS extends Component {
  render() {
    return (
      <div>
        <div class="container">
  <div>
    <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div class="row">
    <div class="column">
      <img src="https://i2.wp.com/fcpp.org/wp-content/uploads/contact.jpg?fit=888%2C802&ssl=1" style={{width:"100%"}}/>
    </div>
    <div class="column">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">city</label>
        <select id="country" name="country">
          <option value="australia">Riyadh</option>
          <option value="canada">zulfi</option>
          <option value="usa">jeddah</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height : "170px"}}></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>
      </div>
    )
  }
}
