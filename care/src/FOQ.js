import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Collapse, Button, CardBody, Card } from 'reactstrap';


export default class FOQ extends Component {


  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {



    return (
      <div>
    <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>problem1</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis consequuntur recusandae aspernatur facere natus maxime suscipit dolore possimus repellendus esse. Explicabo, ex. Aut ducimus iusto maiores voluptatem dignissimos mollitia unde!
            </CardBody>
          </Card>
        </Collapse>
      
      </div>

      </div>
    )
  }
}
