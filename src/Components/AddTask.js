import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Addlist from '../Reduceser/Adduser';
import { useDispatch } from 'react-redux';

export default function AddTask() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    console.log({ title, description });
    dispatch(Addlist({ title, description }));
  };
  return (
    <section className="my-4">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Tittle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <div className="text-end">
          <Button variant="primary" type="submit" onClick={(e) => addTask(e)}>
            Add Task
          </Button>
        </div>
      </Form>
    </section>
  );
}
