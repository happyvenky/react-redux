import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import UpdateTask from './UpdateTask';
import { useSelector } from 'react-redux';

export default function TaskList() {
  const { taskList } = useSelector((state) => state.task);
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
          {taskList &&
            taskList.map((item, index) => {
              return (
                <tr className="text-center" key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <Button
                      variant="primary"
                      className="mx-3"
                      onClick={() => updateTask()}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button variant="primary">
                      <i
                        className="bi bi-trash3"
                        onClick={() => deleteTask()}
                      ></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <UpdateTask show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
