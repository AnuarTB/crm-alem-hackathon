import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';

import PassengerForm from '../components/PassengerForm';
import Panel from './Panel';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Container fluid='md'>
      <p className='h1 m-3'><strong>Redemax</strong></p>
      <hr/>
      <Switch>
        <Route exact path='/'>
          <PassengerForm />
        </Route>
        <Route path='/panel'>
          <Panel />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
