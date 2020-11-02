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
        
        //avoid empty input sumbission
        if(this.state.Item === "" ){
          alert("Empty input not allowed!");
          return;
        }

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
      <button className="btn btn-primary" onClick={this.handleShow}>
          <i className="fa fa-edit"></i>
      </button>
      <Modal show={show} onHide={this.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <h3>Edit "{this.props.Item}" ?</h3>
            <input type="text" className="form-control" 
            placeholder="Type here...." 
            name="Item" 
            onChange={this.handleInputChange}/>
          </form> 
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={this.handleClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
      );
    }
}

export default ModalEdit;