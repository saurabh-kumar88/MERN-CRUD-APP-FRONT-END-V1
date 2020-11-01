import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class ModalEdit extends Component {
    constructor(props){
        super(props);

        this.state = {
            show  : false,
            Item  : '',
            index : null,
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        

    }

    handleShow(){
        this.setState({
            show : true,
        })
    };

    handleClose(){
        this.setState({
            show : false,
        })
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          "todo_Id" :   this.props.Index,
          "title"   :   this.state.Item,    
        };
        console.log(data)
        this.props.handleSubmit(data);
        this.handleClose();
    }


    render(){
        const { show } = this.state;
        return (
            <>
      <button variant="primary" onClick={this.handleShow}>
        Update 
      </button>
      <Modal show={show} onHide={this.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <label>
            Item:
              <input type="text" name="Item" onChange={this.handleInputChange}/>
            </label>
          </form> 
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={this.handleClose}>
            Close
          </button>
          <button variant="primary" onClick={this.handleSubmit}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
      );
    }
}

export default ModalEdit;