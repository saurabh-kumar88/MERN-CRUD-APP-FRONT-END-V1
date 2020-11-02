import React, { Component } from "react";
import TodoItems from './TodoItems';
import update from 'react-addons-update';
import { trackPromise } from 'react-promise-tracker';
import { getAPI } from '../api/getAPI';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            Items     : [],
            newItem   : '', 
            isLoaded  : false,
            error     : null,       
        };
        this.inputRef = React.createRef();
        this.addItem =  this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.isDuplicated = this.isDuplicated.bind(this);

    }

    focusInput(){
      this.inputRef.current.focus()
    }

    handleInputChange = (event) =>{
      
      this.setState({
        newItem : event.target.value,
        
      })
      
    }

    isDuplicated = (compareItem) => {
      var isDuplicate = false;
      this.state.Items.forEach((item) => {
        if(item.title === compareItem){
          isDuplicate = true;
        } 
      })
      return isDuplicate;
    }

    addItem = (event) => {
      event.preventDefault();
      
      // avoid empty input submission
      if(this.state.newItem === "" ){
        alert("Empty input not allowed!");
        return;
      }
      
      // avoid duplicacy
      if(this.isDuplicated(this.state.newItem)){
        alert("Item already exist!");
        return;
      } else{
      // network call
      trackPromise(
        fetch("https://mern-todo-app-v1.herokuapp.com/api/todo/add", {
        method : 'POST',
        headers : {
          'Content-Type' : 'Application/json'
        },
        body : JSON.stringify({'title' : this.state.newItem})
      })
      .then(res => res.json())
      .then(
        (result) => {
          
          trackPromise(
            fetch("https://mern-todo-app-v1.herokuapp.com/api/todo/latest", {
              method  : 'GET',
              headers : {
                'Content-Type' : 'Application/json'
              },
            })
            .then(res => res.json())
            .then(
              (response) => {
                  this.setState({
                  isLoaded: true,
                  Items : [response, ...this.state.Items],
                  newItem : '',
                });
              }
            )
          )
          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    );
  }
}

    removeItem = (index) => {
      const {Items} = this.state 
      
      // server call

      trackPromise(
        fetch(`https://mern-todo-app-v1.herokuapp.com/api/todo/delete/${index}`, {
          method : 'DELETE',
        })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              Items: Items.filter((item)=>{
                return item.todo_Id !== index
              }),
            })
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        ) 
      );
    }

      updateItem = (data) => {
        
        // avoid duplicacy
        if(this.isDuplicated(data.title)){
           alert("Item already exist!");
           return; 
        }else{
        // server request
        trackPromise(
          fetch(`https://mern-todo-app-v1.herokuapp.com/api/todo/update/${data.todo_Id}`, {
            method : 'PATCH',
            headers : {
              'Content-Type' : 'Application/json'
            },
            body : JSON.stringify({'title' : data.title })
          })
          .then(res => res.json())  
          .then(
            (result) => {  
              var index = this.state.Items.findIndex(p => p.todo_Id === data.todo_Id);
              this.setState(update(this.state, {        
                Items: {
                  [index]: {
                    $set: data,
                  }
                }
              }));
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          ) 
        );
      }  
    }

    componentDidMount(){
      this.inputRef.current.focus()
      
      // fetch all Items on initial load
      trackPromise(
        getAPI.fetchAll()
        .then((response) => {
          // create array of items
          var todosArray = [];
          response.forEach(todo => {
            todosArray.push(todo);
            this.setState({
              Items : todosArray,})
          });
        })
        );

    }

  render() {
    const {Items , newItem } = this.state
    return (
      <div className="w3-container">
        <div className="w3-card-4">
          <div className="w3-container ">
            <h3>Add New Items</h3>
          </div>
          <br />
          <form onSubmit={this.addItem} className="w3-container">
          <input name="Items"
                className="form-input"
                placeholder="Type here...." 
                value={newItem} 
                onChange={this.handleInputChange}
                ref={this.inputRef} />
            
            <button className="form-btn" type="submit">Submit</button>
          </form>
          </div>
        <br />
        <TodoItems entries={Items} 
          removeItem={this.removeItem}
          updateItem={this.updateItem}/>      
      </div>
    );
    
  }
}
 
export default TodoList;