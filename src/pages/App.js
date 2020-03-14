import React from 'react';
import './App.css';

import Jumbotron from 'react-bootstrap/Jumbotron';

import PassengerForm from '../components/PassengerForm';

function App() {
  return (
    <Jumbotron>
      <h1>Добро пожаловать в Казахстан!</h1>
      <PassengerForm />
    </Jumbotron>
  );
}

export default App;
