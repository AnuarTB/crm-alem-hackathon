import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { MdPhone } from 'react-icons/md';

function DataCard({survey}) {
  const cardStyle = !survey.checked ? 'danger' : (survey.hospitalized ? 'warning' : 'light');
  const textColor = !survey.checked ? 'white' : 'black';
  return (
    <Card bg={cardStyle} text={textColor} className='mt-3'>
      <Card.Header><h3>{survey.lastName + ' ' + survey.firstName}</h3></Card.Header>
      <Card.Body style={{'fontSize': '1.3em'}}>
        Гражданство: {survey.nationality}
        <br/>
        ИИН / Номер паспорта: {survey.identification}
        <br/>
        Последние посещенные страны: {survey.lastVisitedCountries}
        <br/>
        Место проживания: {survey.stayingPlace}
        {survey.hospitalized && (
          <>
            <br/>
            Больница: {survey.hospitalAddress}
          </>
        )}
        <br/>
        Контактный номер: {survey.contactNumbers}
        <br />
        <Button variant='dark' className='mt-2'>
          <MdPhone /> Позвонить
        </Button>
      </Card.Body>
    </Card>
  );
}

export default DataCard;