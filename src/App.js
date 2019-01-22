import React from 'react';
import TaskList from './components/TodoComponents/TodoList';
import TaskForm from './components/TodoComponents/TodoForm';
import './app.css';

const toDoData = [
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      taskList: toDoData,
      taskName: ''
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewTask = event => {
    event.preventDefault();
    this.setState({
      taskList: [
        ...this.state.taskList,
        { taskName: this.state.taskName, id: Date.now(), completed: false }
      ],
      taskName: ''
    });
  };

  clearTask = event => {
    event.preventDefault();
    this.setState({
      taskList: this.state.taskList.filter(
        task => task.completed === false
      )
    });
  };

  toggleComplete = id => {
    this.setState({
      taskList: this.state.taskList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  render() {
    return (
      <div className='App'>
        <TaskList 
          taskList={this.state.taskList}
          toggleComplete={this.toggleComplete} 
        />
        <TaskForm
          addNewTask={this.addNewTask}
          handleChanges={this.handleChanges}
          taskName={this.state.taskName}
          clearTask={this.clearTask}
        />
      </div>
    );
  }
}

export default App;
