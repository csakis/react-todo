import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class AddTodo extends Component {
    state = {value: ''};

    handleButton = () => {
            this.props.insertTodo(this.state.value);
            this.setState({value: ""});
        };
    handleChange = (e) => {
        this.setState({value: e.target.value})
    };
    render() { 
    return (
    <ButtonGroup>
        <Form.Control 
            value={this.state.value} 
            onChange={this.handleChange}
            placeholder="Enter to do" 
            />
        <Button
            className= {this.state.value.length === 0 ? 'disabled': ''}
            onClick = {this.state.value ? this.handleButton: null}
        >Add</Button>
    </ButtonGroup>          
          );
    }
}
 
export default AddTodo;