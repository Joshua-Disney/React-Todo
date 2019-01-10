import React from 'react';
import Task from './Todo';

const TaskList = (props) => {
  return (
    <div>
      <h1>Stuff needs doin'</h1>
      {props.taskList.map((task, index) => {
        return (
          <Task 
          index={index}
          toggleComplete={props.toggleComplete}
          task={task} 
          key={task.id} 
          />
      )
    })}
    </div>
  );
}

export default TaskList;