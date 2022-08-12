const faker = require('@faker-js/faker').faker;

export const existingUser = {
    login: 'poko',
    password: 'tyughj'
};

export const baseUrl = 'https://www.redmine.org';

const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomPassword = faker.internet.password();

export const fakeUser = {
    login: randomFirstName + randomLastName,
    password: randomPassword,
    firstName: randomFirstName,
    lastName: randomLastName,
    email: `${randomFirstName}${randomLastName}@mailinator.com`
};

export const randomWord = faker.random.word();
