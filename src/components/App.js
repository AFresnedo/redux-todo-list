import React, { Component } from 'react'
import Todos from './Todos'
import TodoForm from './TodoForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 0,
          task: 'Test this Todo Page',
          completed: false
        },
        {
          id: 1,
          task: 'Learn Redux',
          completed: false
        },
        {
          id: 2,
          task: 'Learn React',
          completed: true
        }
      ]
    }
  }

  addTodo = (item) => {
    console.log('adding new item', item);
    let newItem = {
      id: 3,
      task: item,
      completed: false
    };
    let todosTemp = [...this.state.todos, newItem];
    this.setState({ todos: todosTemp })
  }
  render () {
    return (
      <div className="App">
        <h1>Redux TODOS!</h1>
        <TodoForm addTodo={this.addTodo} />
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App
