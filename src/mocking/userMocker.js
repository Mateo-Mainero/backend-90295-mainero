import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

const roles = ['user', 'admin'];
const encryptedPassword = bcrypt.hashSync('coder123', 10);

export const generateMockUsers = (amount) => {
  const users = [];

  for (let i = 0; i < amount; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: encryptedPassword,
      role: roles[Math.floor(Math.random() * roles.length)],
      pets: []
    });
  }

  return users;
};
