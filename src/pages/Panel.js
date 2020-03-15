import React from 'react';

import './Panel.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { MdWarning, MdLocalHospital } from 'react-icons/md';

import { SURVEYS, checkedByRegion, hospitalizedByRegion } from '../utils/data';
import DataCard from '../components/DataCard';

let regions = [
  { name: 'Актюбинская Область', id: 'aktobe' },
  { name: 'Акмолинская Область', id: 'akmola' },
  { name: 'Алматинская Область', id: 'almaty' }
];

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { region: 'aktobe' };

    this.regionChange = this.regionChange.bind(this);
  }

  regionChange(event) {
    this.setState({ region: event.target.value });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={4}>
            <Form>
              <Form.Group>
                <Form.Label>
                  <h2>Выберите Область</h2>
                </Form.Label>
                <Form.Control
                  as='select'
                  value={this.state.value}
                  onChange={this.regionChange}
                >
                  {regions.map(region => (
                    <option value={region.id} key={region.id}>
                      {region.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              {/*<Button variant='primary' type='submit'>
                  Submit
                </Button>*/}
            </Form>
            <Card bg='danger' text='white' className='mt-5'>
              <Card.Header>
                <MdWarning className='enlargedIcon' />
                Число непроверенных людей
              </Card.Header>
              <Card.Body>
                <h1 style={{ textAlign: 'center' }}>
                  {checkedByRegion(SURVEYS, this.state.region)}
                </h1>
              </Card.Body>
            </Card>
            <Card bg='warning' text='black' className='mt-5'>
              <Card.Header>
                <MdLocalHospital className='enlargedIcon' />
                Число госпитализированных людей
              </Card.Header>
              <Card.Body>
                <h1 style={{ textAlign: 'center' }}>
                  {hospitalizedByRegion(SURVEYS, this.state.region)}
                </h1>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={8}>
            {SURVEYS
              .filter(survey => survey.region === this.state.region)
              .map(survey => (<DataCard survey={survey} />))
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Panel;
