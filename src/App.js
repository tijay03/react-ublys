import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
//simport Todos from "./components/Todos";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import CostAllocation from "./components/pages/CostAllocation";

class App extends Component{
  state = {
    todos:[
      {
        id:1,
        title: 'Meeting',
        completed:false
      },
      {
        id:2,
        title: 'Dinner',
        completed:false
      },
      {
        id:3,
        title: 'Work',
        completed:false
      }
    ]
  }

  //Toggle complete
  markComplete = (id) => {
   this.setState({ todos: this.state.todos.map(todo => {
     if (todo.id == id){
       todo.completed = !todo.completed
     }
     return todo;
   }) }) 
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path={"/"} component={Home}/>
          <Route path={"/about"} component={About} />
          <Route path={"/costAllocation"} component={CostAllocation} />
          <Footer/>
        </div>
      </Router>
    );
  }
}
 
export default App;
