import React from 'react';
import './Todo.css';

const TaskForm = (props) => {
  return (
    <form onSubmit={props.addNewTask}>
      <input
        value={props.taskName}
        type='text'
        name='taskName'
        placeholder='Name'
        onChange={props.handleChanges}
        autoComplete='off'
      />
      <button type='submit'>Add Task</button>
      <div>
        <button onClick={props.clearTask}>Clear Completed</button>
      </div>
    </form>
  );
};

export default TaskForm;