import UsersService from './users.service.js';
import PetsService from './pets.service.js';
import AdoptionsService from './adoptions.service.js';

export const usersService = new UsersService();
export const petsService = new PetsService();
export const adoptionsService = new AdoptionsService();