import React from 'react';

import Form from 'react-bootstrap/Form';

function PassengerForm() {
  return (
    <Form>
      <Form.Group controlId='formBasicName'>
        <Form.Label>Имя</Form.Label>
        <Form.Control type='email'/>
      </Form.Group>
    </Form>
  );
}

export default PassengerForm;
