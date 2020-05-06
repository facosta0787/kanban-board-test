import React, { Component } from 'react'

class Controls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: '',
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { newTask } = this.state
    const { handleAddTask, selectedTask } = this.props

    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex' }}>
          <input
            name="newTask"
            placeholder="New task name"
            style={{ fontSize: '1rem' }}
            data-testid="new-task-name-input"
            value={newTask}
            onChange={this.handleInputChange}
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!newTask}
            data-testid="create-task-btn"
            onClick={() => {
              handleAddTask(newTask)
              this.setState({ newTask: '' })
            }}
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
            value={selectedTask ? selectedTask.name : ''}
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!selectedTask || selectedTask.stage === 0}
            data-testid="move-back-btn"
            name="back"
            onClick={this.props.handleClickAction}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!selectedTask || selectedTask.stage === 3}
            data-testid="move-forward-btn"
            name="forward"
            onClick={this.props.handleClickAction}
          >
            Move forward
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!selectedTask}
            data-testid="delete-btn"
            name="delete"
            onClick={this.props.handleClickAction}
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default Controls
