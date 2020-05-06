import React from 'react';

import Stage from './Stage';

const Board = ({ stagesNames, stagesTasks, handleSelectTask }) => {
  return (
    <div>
      <h1>Kanban board</h1>
      <div style={{
        display: 'flex',
      }}>
        {stagesTasks.map((tasks, idx) => (
          <Stage
            stageId={idx}
            key={stagesNames[idx]}
            name={stagesNames[idx]}
            tasks={tasks}
            handleSelectTask={handleSelectTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
