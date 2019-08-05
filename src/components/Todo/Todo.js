import React, {Component} from 'react';
import Button  from 'react-bootstrap/Button';
import './Todo.css'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class Todo extends Component {

    render() { 
        return (
      <div>
          <ButtonGroup
            size="lg">
   
      <ListGroup.Item style={{width:"300px"}}
        eventKey={this.props.id}
        onSelect={this.props.setDone}
        >         
        <span className={this.props.isDone ? 'done':''}>{this.props.title}</span>
      </ListGroup.Item>
      <Button 
        variant="danger" 
        onClick={this.props.deleteTodo}>X</Button> 
        </ButtonGroup>
      </div>      

          );
    }
}
 
export default Todo;