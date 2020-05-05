import React, { Component } from 'react';

class Controls extends Component {
  render() {
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex' }}>
          <input
            placeholder="New task name"
            style={{ fontSize: '1rem' }}
            data-testid="new-task-name-input"
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled
            data-testid="create-task-btn"
          >
            Create
          </button>
        </div>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled
            data-testid="move-back-btn"
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled
            data-testid="move-forward-btn"
          >
            Move forward
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled
            data-testid="delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;
