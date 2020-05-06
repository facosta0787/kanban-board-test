import React from 'react';

const taskNameToId = name => {
  return `task-${name}`;
}

const Task = ({ name, onClick }) => {
  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #ccc',
        margin: '1rem 1rem 0 1rem',
        cursor: 'pointer' }}
      data-testid={taskNameToId(name)}
      onClick={() => onClick(name)}
    >
      {name}
    </div>
  );
}

export default Task;
