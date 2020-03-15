export const SURVEYS = [
  {
    lastName: 'Иванов',
    firstName: 'Иван',
    dateOfBirth: new Date('1989-01-13'),
    nationality: 'Казахстан',
    identification: '890113123456',
    occupation: 'Студент',
    lastVisitedCountries: 'Россия',
    stayingPlace: 'ул. Ленина 102',
    contactNumbers: '123456789',
    flightRoute: 'Москва - Алматы',
    region: 'almaty',
    checked: false,
    hospitalized: false,
    hospitalAddress: ''
  },
  {
    lastName: 'Иванов',
    firstName: 'Иван',
    dateOfBirth: new Date('1989-01-13'),
    nationality: 'Казахстан',
    identification: '890113123456',
    occupation: 'Студент',
    lastVisitedCountries: 'Россия',
    stayingPlace: 'ул. Ленина 102',
    contactNumbers: '123456789',
    flightRoute: 'Москва - Алматы',
    region: 'aktobe',
    checked: false,
    hospitalized: false,
    hospitalAddress: ''
  },{
    lastName: 'Иванов',
    firstName: 'Иван',
    dateOfBirth: new Date('1989-01-13'),
    nationality: 'Казахстан',
    identification: '890113123456',
    occupation: 'Студент',
    lastVisitedCountries: 'Россия',
    stayingPlace: 'ул. Ленина 102',
    contactNumbers: '123456789',
    flightRoute: 'Москва - Алматы',
    region: 'akmola',
    checked: false,
    hospitalized: false,
    hospitalAddress: ''
  },
  {
    lastName: 'Иванов',
    firstName: 'Иван',
    dateOfBirth: new Date('1989-01-13'),
    nationality: 'Казахстан',
    identification: '890113123456',
    occupation: 'Бизнесмен',
    lastVisitedCountries: 'Франция',
    stayingPlace: 'ул. Ленина 102',
    contactNumbers: '123456789',
    flightRoute: 'Париж - Алматы',
    region: 'akmola',
    checked: false,
    hospitalized: false,
    hospitalAddress: ''
  },
  {
    lastName: 'Иванов',
    firstName: 'Иван',
    dateOfBirth: new Date('1989-01-13'),
    nationality: 'Казахстан',
    identification: '890113123456',
    occupation: 'Студент',
    lastVisitedCountries: 'Россия',
    stayingPlace: 'ул. Ленина 102',
    contactNumbers: '123456789',
    flightRoute: 'Москва - Алматы',
    region: 'almaty',
    checked: false,
    hospitalized: true,
    hospitalAddress: ''
  },
  {
    lastName: 'Иванов',
    firstName: 'Иван',
    dateOfBirth: new Date('1993-02-24'),
    nationality: 'Россия',
    identification: '890113123456',
    occupation: 'Разнорабочий',
    lastVisitedCountries: 'Италия',
    stayingPlace: 'ул. Жуковского 5',
    contactNumbers: '123456879',
    flightRoute: 'Милан - Москва, Москва - Актобе',
    region: 'aktobe',
    checked: true,
    hospitalized: true,
    hospitalAddress: 'Больница №1'
  },
  {
    lastName: 'Иванов',
    firstName: 'Иван',
    dateOfBirth: new Date('1993-02-24'),
    nationality: 'Россия',
    identification: '890113123456',
    occupation: 'Разнорабочий',
    lastVisitedCountries: 'Италия',
    stayingPlace: 'ул. Жуковского 5',
    contactNumbers: '123456879',
    flightRoute: 'Милан - Москва, Москва - Актобе',
    region: 'aktobe',
    checked: true,
    hospitalized: false,
    hospitalAddress: 'Больница №1'
  },
  {
    lastName: 'Иванов',
    firstName: 'Иван',
    dateOfBirth: new Date('1993-02-24'),
    nationality: 'Россия',
    identification: '890113123456',
    occupation: 'Разнорабочий',
    lastVisitedCountries: 'Италия',
    stayingPlace: 'ул. Жуковского 5',
    contactNumbers: '123456879',
    flightRoute: 'Милан - Москва, Москва - Актобе',
    region: 'almaty',
    checked: true,
    hospitalized: false,
    hospitalAddress: 'Больница №1'
  }
];

export function checkedByRegion(surveys, region) {
  return surveys
    .filter(survey => survey.region === region)
    .reduce((total, one) => total + (one.checked === true ? 0 : 1), 0);
}

export function hospitalizedByRegion(surveys, region) {
  return surveys
    .filter(survey => survey.region === region)
    .reduce((total, one) => total + (one.hospitalized === true ? 1 : 0), 0);
}
