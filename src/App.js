import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import Todo from "./components/TodoComponents/Todo";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: { task: "", id: "", completed: false }
    };
  }
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { task: itemText, id: Date.now(), completed: false };
    this.setState({
      currentItem
    });
  };
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.task !== "") {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { task: "", id: "" }
      });
    }
  };
  deleteItem = id => {
    // const filteredItems = this.state.items.filter(item => {
    //   console.log(item.task)
    //   console.log(item)
    //   // console.log(item.completed)
    //   // return item.task;
    //   return item.id !== id
    // })
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    });
  };
  removeCompletedTasks = e => {
    const filteredItems = this.state.items.filter(item => {
      return !item.completed;
    });
    this.setState({
      items:filteredItems
    })
  };

  inputElement = React.createRef();
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          removeCompletedTasks = {this.removeCompletedTasks}
        />
        <Todo entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
