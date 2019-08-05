import React from 'react';
import Todos from './components/Todos/Todos';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function App() {
  return (
    <Container style={{"marginTop": "25px"}}> 
      <Row>
        <Todos />  
      </Row>
    </Container>
  );
}

export default App;
