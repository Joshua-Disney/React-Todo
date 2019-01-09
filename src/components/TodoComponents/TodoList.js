import React from 'react';
import Task from './Todo';

const TaskList = props => {
  return (
    <div>
      {props.toDoList.map((task) => {
        return <Task task={task} key={task.id} />;
      })}
    </div>
  );
};

export default TaskList;
