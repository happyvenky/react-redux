import React from 'react';
import Table from 'react-bootstrap/Table';

export default function TaskList() {
  return (
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
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}
