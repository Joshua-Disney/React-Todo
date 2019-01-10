import React from 'react';

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
      <button onClick={props.clearTask}>Clear Completed</button>
    </form>
  );
};

export default TaskForm;