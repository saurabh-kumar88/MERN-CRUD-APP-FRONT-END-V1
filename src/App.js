import React, {Component} from 'react';
import TodoList from './components/TodoList';
import './App.css';
import Heading from './components/Heading';

class App extends Component {
   
  render(){

    return(
      <div className="App">
          <div className="Child">
            <Heading />
            <TodoList />
          </div>
      </div>    
    )
    
  }
}

export default App