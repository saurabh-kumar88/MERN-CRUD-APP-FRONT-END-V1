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
    
    return(
      <table className="Table">
          <tbody>
            <div className="scrollit">
            {this.props.entries.map((item) => {
                return(<tr key={item.todo_Id}>
                  <td id="todo-title">{item.title}</td>
                  <td>  
                    <ModalEdit handleSubmit={this.handleSubmit}
                    Index={item.todo_Id}
                    Item={item.title} />
                  </td>
                  <td>
                    <ModalDelete Index={item.todo_Id} 
                    Item={item.title}
                    handleItemDelete={this.handleItemDelete}/>
                  </td>
                </tr>)
              })}
            </div>
              
          </tbody>
          
      </table>
    );
    
    // return (
    //   <div>
    //     <ul className="w3-ul w3-hoverable">
    //       {this.props.entries.map((item) => (
    //         <li key={item.todo_Id}>
    //           <div className="itemStyle">
                
    //             <div className="item-title">
    //               {item.title}
    //             </div>

    //             <div className="modal-btn">
    //               <ModalEdit handleSubmit={this.handleSubmit}
    //               Index={item.todo_Id}
    //               Item={item.title} />
    //             </div>

    //             <div className="modal-btn">
    //               <ModalDelete Index={item.todo_Id} 
    //               Item={item.title}
    //               handleItemDelete={this.handleItemDelete}/>
    //             </div>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // );
  }
};
 
export default TodoItems;