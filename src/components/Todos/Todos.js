import React, { Component } from 'react';
import ToDo from '../Todo/Todo'
import AddTodo from '../AddToDo/AddToDo';
import nextId from "react-id-generator";
import ListGroup from 'react-bootstrap/ListGroup'


class ToDos extends Component {
    state = { todos: []};
    insertTodo = (x) => {
        const todo = {
            id: nextId(),
            title: x,
            isDone: false
        }
        const tempTodos = [...this.state.todos]
        tempTodos.push(todo)
        this.setState({todos: tempTodos});
    };
    setDone = (key) => {
        const todo = this.state.todos.find(x =>key ===x.id);
        todo.isDone = !todo.isDone;
        const todos = [...this.state.todos];
        todos[key] = todo;
        this.setState({todos: todos}); 
    };

    deleteTodo = (key) => {
        console.log('key:', key)
        const tempTodos = this.state.todos.filter(x => x.id !== key);
        this.setState({todos: tempTodos}); 
    };


render() { 
    let todoDiv =  (<span> No todos remaining</span>);
    if (this.state.todos.length > 0) {
        todoDiv =  (
        <ListGroup>
        {this.state.todos.map((todo, index) =>{
            return (
                <ToDo 
                key = {todo.id}
                id = {todo.id}
                title = {todo.title}
                isDone = {todo.isDone}
                setDone = {(event) => this.setDone(event, todo.id)}
                deleteTodo = {() =>{this.deleteTodo(todo.id)}}
                />   
                )
            })
        }
        </ListGroup>
        );
    }
        return (
            <div>
            <AddTodo insertTodo={this.insertTodo}/>
            <hr/>
            {todoDiv}
            </div>
          );
    }
}
 
export default ToDos;