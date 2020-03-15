import React from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const schema = yup.object({
  lastName: yup.string().required(),
  firstName: yup.string().required(),
  middleName: yup.string(),
  dateOfBirth: yup.date().required(),
  nationality: yup.string().required(),
  identification: yup.string().required(),
  occupation: yup.string().required(),
  lastVisitedCountries: yup.string().required(),
  stayingPlace: yup.string().required(),
  contactNumbers: yup.string().required(),
  flightRoute: yup.string().required(),
  terms: yup.bool().required()
});

function handleSubmit(obj) {
  alert("Спасибо за заполнение анкеты!");
  window.location.reload(false); 
}

let regions = [
  { name: 'Актюбинская Область', id: 'aktobe' },
  { name: 'Акмолинская Область', id: 'akmola' },
  { name: 'Алматинская Область', id: 'almaty' }
];

function PassengerForm(props) {
  return (
    <Container fluid={true}>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        validator={() => ({})}
        initialValues={{
          lastName: '',
          firstName: '',
          middleName: '',
          dateOfBirth: new Date().toISOString().substr(0, 10),
          nationality: '',
          identification: '',
          occupation: '',
          lastVisitedCountries: '',
          stayingPlace: '',
          contactNumbers: '',
          flightRoute: '',
          terms: false
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formFamilyName'>
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                name='lastName'
                required
                type='text'
                value={values.lastName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='formFirstName'>
              <Form.Label>Имя</Form.Label>
              <Form.Control
                name='firstName'
                required
                type='text'
                value={values.firstName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='formMiddleName'>
              <Form.Label>Отчество</Form.Label>
              <Form.Control
                name='middleName'
                type='text'
                value={values.middleName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='formDateOfBirth'>
              <Form.Label>Дата рождения</Form.Label>
              <Form.Control
                name='dateOfBirth'
                required
                type='date'
                value={values.dateOfBirth}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='formNationality'>
              <Form.Label>Гражданство</Form.Label>
              <Form.Control
                name='nationality'
                required
                type='text'
                value={values.nationality}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='formIdentificationData'>
              <Form.Label>ИИН* или паспортные данные</Form.Label>
              <Form.Control
                name='identification'
                required
                type='text'
                value={values.identification}
                onChange={handleChange}
              />
              <Form.Text className='text-muted'>
                *Индивидуальный Идентификационный Номер (Применимо только к
                гражданам Республики Казахстан)
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='formOccupation'>
              <Form.Label>Место работы (учебы)</Form.Label>
              <Form.Control
                name='occupation'
                required
                type='text'
                value={values.occupation}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='formLastVisitedCountries'>
              <Form.Label>
                В каких странах вы были в последние 14 дней
              </Form.Label>
              <Form.Control
                name='lastVisitedCountries'
                required
                type='text'
                value={values.lastVisitedCountries}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Область в которую вы собираетесь поехать
              </Form.Label>
              <Form.Control
                as='select'
              >
                {regions.map(region => (
                  <option value={region.id} key={region.id}>
                    {region.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='formStayingPlace'>
              <Form.Label>
                Место жительства, либо предпологаемое место проживания
              </Form.Label>
              <Form.Control
                name='stayingPlace'
                required
                type='text'
                value={values.stayingPlace}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='formContactNumbers'>
              <Form.Label>Контактный телефон</Form.Label>
              <Form.Control
                name='contactNumbers'
                required
                type='text'
                value={values.contactNumbers}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='formRoute'>
              <Form.Label>Маршрут движения</Form.Label>
              <Form.Control
                name='flightRoute'
                required
                type='text'
                value={values.flightRoute}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox'>
              <Form.Label>
                Сдавая эту форму я подтверждаю что я даю согласие на
                использование своих данных для предотвращения распространения
                COVID-19 на территории Республики Казахстан.
              </Form.Label>
              <Form.Check
                name='terms'
                required
                type='checkbox'
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Сдать анкету
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default PassengerForm;
