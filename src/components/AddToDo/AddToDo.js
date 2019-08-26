import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class AddTodo extends Component {

    handleButton = () => {
            this.props.insertTodo(this.props.input);
            this.setState({value: ""});
        };
    handleChange = (e) => {
        this.setState({value: e.target.value})
    };
    render() { 
    return (
    <ButtonGroup>
        <Form.Control 
            value={this.props.input} 
            onChange={this.handleChange}
            placeholder="Enter to do" 
            />
        <Button
            className= {this.props.input.length === 0 ? 'disabled': ''}
            onClick = {this.props.input ? this.handleButton: null}
        >Add</Button>
    </ButtonGroup>          
          );
    }
}
 
export default AddTodo;