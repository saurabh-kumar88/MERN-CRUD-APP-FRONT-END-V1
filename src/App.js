import React, {Component} from 'react';
import TodoList from './components/TodoList';

class App extends Component {
   
  render(){

    return(
      <div className="App">
          <div className="Child">
            <h1>MERN Stack - CRUD App-V1</h1>
            <TodoList />
          </div>
      </div>  
    )

    
    
  }
}

export default App