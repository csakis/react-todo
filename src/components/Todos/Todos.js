import React, { Component } from "react";
import ToDo from "../Todo/Todo";
import AddTodo from "../AddToDo/AddToDo";
import { connect } from "react-redux";
import { actions } from "../../store";
import nextId from "react-id-generator";
import ListGroup from "react-bootstrap/ListGroup";

class ToDos extends Component {
 

  insertTodo = x => {
    const todo = {
      id: nextId(),
      title: x,
      isDone: false
    };
    const tempTodos = [...this.props.todos];
    tempTodos.push(todo);
    this.setState({ todos: tempTodos });
  };

  setDone = key => {
    const todo = this.props.todos.find(x => key === x.id);
    todo.isDone = !todo.isDone;
    const todos = [...this.props.todos];
    todos[key] = todo;
    this.setState({ todos: todos });
  };

  deleteTodo = key => {
    console.log("key:", key);
    const tempTodos = this.props.todos.filter(x => x.id !== key);
    this.setState({ todos: tempTodos });
  };

  render() {
    let todoDiv = <span>No todos remaining</span>;
    if (this.props.todos.length > 0) {
      todoDiv = (
        <ListGroup>
          {this.props.todos.map((todo, index) => {
            return (
              <ToDo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                isDone={todo.isDone}
                setDone={() => this.setDone(todo.id)}
                deleteTodo={() => this.deleteTodo(todo.id)}
              />
            );
          })}
        </ListGroup>
      );
    }
    return (
      <div>
        <AddTodo insertTodo={this.insertTodo} />
        <hr />
        {todoDiv}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    input: state.input,
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo(todo) {
      dispatch(actions.addTodo(todo));
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDos);
