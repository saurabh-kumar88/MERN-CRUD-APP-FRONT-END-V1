import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class ModalDelete extends Component {
    constructor(props){
        super(props);

        this.state = {
            show  : false,
            delete_item : false,
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
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


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            delete_item : true,
        });
        this.props.handleItemDelete(this.props.Index);
        this.handleClose();
    }


    render(){
        const { show } = this.state;
        return (
            <>
      <button className="btn btn-danger" onClick={this.handleShow}>
        <i className="fa fa-trash"></i> 
      </button>
      <Modal show={show} onHide={this.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Are you sure, you want to delete this item?</h1>
          <p>{this.props.Item}</p> 
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={this.handleClose}>
            Cancel
          </button>
          <button variant="primary" onClick={this.handleSubmit}>
            Yes, Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
      );
    }
}

export default ModalDelete;