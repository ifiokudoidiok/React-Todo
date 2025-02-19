import React, { Component } from 'react'


class Todo extends Component {
    createTasks = item => {
        return (
          <li key={item.id} onClick={() => this.props.deleteItem(item.id)}>
            {item.task} 
            
            {item.completed 
            ? ' isCompleted'
            : ' notCompleted'}
          </li>
        )
      }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
    return <ul className="theList">{listItems}</ul>
  }
}
export default Todo