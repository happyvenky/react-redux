import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddTask() {
  return (
    <section className="my-4">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Task</Form.Label>
          <Form.Control type="text" placeholder="Enter Tittle" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" />
        </Form.Group>
        <div className="text-end">
          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </div>
      </Form>
    </section>
  );
}
