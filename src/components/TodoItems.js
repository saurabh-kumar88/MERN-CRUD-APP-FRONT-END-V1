import React, { Component } from "react";
import ModalEdit from './Modal';
import ModalDelete from './ModalDelete';
class TodoItems extends Component {
   
  handleSubmit = (data) =>{
    this.props.updateItem(data);
  }

  handleItemDelete = (index) => {
    this.props.removeItem(index);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.entries.map((item) => (
            <li key={item.todo_Id}>{item.title}
            <ModalEdit handleSubmit={this.handleSubmit}
              Index={item.todo_Id}/>
            <ModalDelete Index={item.todo_Id} 
            Item={item.title}
            handleItemDelete={this.handleItemDelete}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
 
export default TodoItems;