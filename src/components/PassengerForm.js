import React from 'react';

import Form from 'react-bootstrap/Form';

function PassengerForm() {
  return (
    <Form>
      <Form.Group controlId='formFamilyName'>
        <Form.Label>Фамилия</Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <Form.Group controlId='formFirstName'>
        <Form.Label>Имя</Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <Form.Group controlId='formMiddleName'>
        <Form.Label>Отчество</Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <Form.Group controlId='formDateOfBirth'>
        <Form.Label>Дата рождения</Form.Label>
        <Form.Control type='date' />
      </Form.Group>
      <Form.Group controlId='formNationality'>
        <Form.Label>Гражданство</Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <Form.Group controlId='formIdentificationData'>
        <Form.Label>ИИН* или паспортные данные</Form.Label>
        <Form.Control type='text' />
        <Form.Text className='text-muted'>
          *Индивидуальный Идентификационный Номер (Применимо только к гражданам
          Республики Казахстан)
        </Form.Text>
      </Form.Group>
      <Form.Group controlId='formOccupation'>
        <Form.Label>Место работы (учебы)</Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <Form.Group controlId='formLastVisitedCountries'>
        <Form.Label>В какой стране вы были в последние 14 дней</Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <Form.Group controlId='formStayingPlace'>
        <Form.Label>
          Место жительства, либо предпологаемое место проживания
        </Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <Form.Group controlId='formContactNumbers'>
        <Form.Label>Контактные телефоны</Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <Form.Group controlId='formRoute'>
        <Form.Label>Маршрут движения</Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <Form.Group controlId='formBasicCheckbox'>
        <Form.Label>
          Сдавая эту форму я подтверждаю что я даю согласие на использование
          своих данных для предотвращения распространения COVID-19 на территории
          Республики Казахстан.
        </Form.Label>
        <Form.Check type='checkbox' />
      </Form.Group>
    </Form>
  );
}

export default PassengerForm;
