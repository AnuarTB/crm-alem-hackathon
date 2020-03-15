import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Panel() {
  let regions = [
    { name: 'Актюбинская Область', id: 'aktobe' },
    { name: 'Акмолинская Область', id: 'akmola' },
    { name: 'Алматинская Область', id: 'almaty' }
  ];
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Область</Form.Label>
          <Form.Control as='select'>
            {regions.map(region => (
              <option value={region.id}>{region.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      
    </Container>
  );
}

export default Panel;
