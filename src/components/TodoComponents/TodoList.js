import React from 'react';
import Task from './Todo';

const TaskList = props => {
  return (
    <div>
      {props.toDoList.map((task, index) => {
        return <Task task={task} key={index} />;
      })}
    </div>
  );
};

export default TaskList;
