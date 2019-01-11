import React from 'react';
import './Todo.css';

const Task = (props) => {
  return (
  <div 
    className={props.task.completed && 'complete' } 
    onClick={() => props.toggleComplete(props.task.id)}
  >
    {props.task.taskName}
  </div>
  );
}

export default Task;