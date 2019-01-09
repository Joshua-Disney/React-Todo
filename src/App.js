import React from 'react';
import TaskList from './components/TodoComponents/TodoList';
import TaskForm from './components/TodoComponents/TodoForm';

const toDoData = [
  { taskName: "Clean garage",
    id: 7897359874598723,
    completed: false },
  { taskName: "Wash Dishes" },
  { taskName: "Vaccuum rug" },
  { taskName: "Cook dinner" },
  { taskName: "Play with Lynette" }
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
        { taskName: this.state.taskName }
      ],
      taskName: ''
    });
  };

  clearTask = event => {
    event.preventDefault();
    this.setState({
      taskList: []
    })
  }

  render() {
    return (
      <div className='App'>
        <TaskList toDoList={this.state.taskList} />
        <TaskForm
          addNewTask={this.addNewTask}
          handleChanges={this.handleChanges}
          taskName={this.taskName}
          clearTask={this.clearTask}
        />
      </div>
    );
  }
}

export default App;
