import React from 'react';

const Task = (props) => {
  return (
  <div 
    className={props.task.complete ? 'complete' : null} 
    onClick={() => props.toggleComplete(props.task.id)}
  >
    {props.task.taskName}
  </div>
  );
}

export default Task;