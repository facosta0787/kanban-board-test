import React, { Component } from 'react'
import './App.css'

import Controls from './components/Controls'
import Board from './components/Board'

const NUM_STAGES = 4

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        { name: 'task 0', stage: 0 },
        { name: 'task 1', stage: 0 },
        { name: 'task 2', stage: 0 },
        { name: 'task 3', stage: 0 },
        { name: 'task 4', stage: 1 },
        { name: 'task 5', stage: 1 },
        { name: 'task 6', stage: 1 },
        { name: 'task 7', stage: 2 },
        { name: 'task 8', stage: 2 },
        { name: 'task 9', stage: 3 },
      ],
      selectedTask: null,
    }
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done']
  }

  handleAddTask = (newTask) => {
    this.setState({
      tasks: [...this.state.tasks, { name: newTask, stage: 0 }],
    })
  }

  handleSelectTask = (name) => {
    this.setState({
      selectedTask: this.state.tasks.find((task) => task.name === name),
    })
  }

  handleClickAction = (e) => {
    const { tasks, selectedTask } = this.state
    const filteredTasks = tasks.filter(
      (task) => task.name !== selectedTask.name
    )

    let selectedTaskNewPosition

    switch (e.target.name) {
      case 'back':
        if (selectedTask.stage === 0) break
        selectedTaskNewPosition = {
          ...selectedTask,
          stage: selectedTask.stage - 1,
        }
        this.setState({
          tasks: [...filteredTasks, { ...selectedTaskNewPosition }],
          selectedTask: { ...selectedTaskNewPosition },
        })
        break

      case 'forward':
        if (selectedTask.stage === 3) break
        selectedTaskNewPosition = {
          ...selectedTask,
          stage:selectedTask.stage + 1,
        }
        this.setState({
          tasks: [...filteredTasks, { ...selectedTaskNewPosition }],
          selectedTask: { ...selectedTaskNewPosition },
        })
        break

      case 'delete':
        this.setState({
          tasks: filteredTasks,
          selectedTask: null,
        })
        break
      default:
        break
    }
  }

  render() {
    const { tasks, selectedTask } = this.state

    let stagesTasks = []
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([])
    }
    for (let task of tasks) {
      const stageId = task.stage
      stagesTasks[stageId].push(task)
    }

    return (
      <div className="App">
        <Controls
          handleAddTask={this.handleAddTask}
          handleClickAction={this.handleClickAction}
          selectedTask={selectedTask}
        />
        <Board
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
          handleSelectTask={this.handleSelectTask}
        />
      </div>
    )
  }
}

export default App
