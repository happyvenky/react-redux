import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import UpdateTask from './UpdateTask';

export default function TaskList() {
  const updateTask = () => {
    console.log('update Task');
    setModalShow(true);
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Tittle</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Button
                variant="primary"
                className="mx-3"
                onClick={() => updateTask()}
              >
                <i className="bi bi-pencil-square"></i>
              </Button>
              <Button variant="primary">
                <i className="bi bi-trash3" onClick={() => deleteTask()}></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <UpdateTask show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
