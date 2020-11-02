import React, {Component} from 'react';
import TodoList from './components/TodoList';
import './App.css';
import Heading from './components/Heading';
import Footer from './components/Footer';


class App extends Component {
   
  render(){

    return(
      <div className="App">
          <div className="Child">
            <Heading />
            <TodoList />
            <Footer />
          </div>
      </div>    
    )
    
  }
}

export default App