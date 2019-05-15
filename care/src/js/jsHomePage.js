import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {
    Link
  } from 'react-router-dom'
class ModalExample extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClos = this.handleClos.bind(this);
        this.state = {
          show: false,
        };
      }
    
      handleClose(e) {
        e.preventDefault()
        this.setState({ show: false });
        this.props.logout()
      }
    
      handleClos() {
        this.setState({ show: false });
      }
      handleShow() {
        this.setState({ show: true });
      }
    
      render() {
        return (
          <>
            <a variant="primary" href="/" onClick={this.handleShow}>
             Long out
            </a>
    
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Are you shore</Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClos}>
                  No
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                <Link className="thenave" to="/" >Yes</Link> 
                </Button >
              </Modal.Footer>
            </Modal>
          </>
        );
      }
    }

export default ModalExample;