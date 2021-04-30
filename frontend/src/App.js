import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/todos') .then(res => this.setState({ todos: res.data}))
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  addTodo = (title) => {
    axios.post('http://localhost:3000/api/todos', {
      id: Math.random(),
      title: title,
      completed: false
    })
      .then(res => this.setState( { todos: [...this.state.todos, res.data]}))
  }
  
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="Container">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
