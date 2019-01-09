import React from 'react';

const TaskForm = props => {
  return (
    <form onSubmit={props.addNewTask}>
      <input
        value={props.taskName}
        type='text'
        name='taskName'
        placeholder='Name'
        onChange={props.handleChanges}
      />
      <button type='submit'>Add Task</button>
      <button onClick={props.clearTask}>Clear All</button>
    </form>
  );
};

export default TaskForm;