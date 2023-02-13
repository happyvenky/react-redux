import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';
import Navbar from './Components/Navbar';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';

export default function App() {
  return (
    <Container>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <AddTask />
          <TaskList />
        </Col>
      </Row>
    </Container>
  );
}
