import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./Todo.css";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class Todo extends Component {
  render() {
    return (
      <div>
        <ButtonGroup>
                    {this.props.title}
        </ButtonGroup>
      </div>
    );
  }
}

export default Todo;
