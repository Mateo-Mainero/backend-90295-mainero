import { Router } from 'express';
import { faker } from '@faker-js/faker';
import { generateMockUsers } from '../mocking/userMocker.js';
import UserModel from '../models/user.model.js';
import PetModel from '../models/pet.model.js';

const router = Router();

// GET /mockingpets
router.get('/mockingpets', (req, res) => {
  const pets = [];
  for (let i = 0; i < 50; i++) {
    pets.push({
      name: faker.animal.cat(),
      species: faker.animal.type(),
      age: faker.number.int({ min: 1, max: 15 })
    });
  }
  res.json({ status: 'success', pets });
});

// GET /mockingusers
router.get('/mockingusers', (req, res) => {
  const users = generateMockUsers(50);
  res.json({ status: 'success', users });
});

// POST /generateData
router.post('/generateData', async (req, res) => {
  const { users = 0, pets = 0 } = req.body;

  try {
    const userMocks = generateMockUsers(users);
    const insertedUsers = await UserModel.insertMany(userMocks);

    const petMocks = [];
    for (let i = 0; i < pets; i++) {
      petMocks.push({
        name: faker.animal.dog(),
        species: faker.animal.type(),
        age: faker.number.int({ min: 1, max: 20 })
      });
    }
    const insertedPets = await PetModel.insertMany(petMocks);

    res.json({
      status: 'success',
      message: 'Datos generados exitosamente',
      inserted: {
        users: insertedUsers.length,
        pets: insertedPets.length
      }
    });
  } catch (err) {
    console.error('Error al generar datos:', err);
    res.status(500).json({ status: 'error', error: 'Falló la generación de datos' });
  }
});

export default router;
