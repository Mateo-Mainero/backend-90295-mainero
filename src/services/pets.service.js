import PetsDAO from '../dao/pets.dao.js';

class PetsService {
  constructor() {
    this.petsDAO = new PetsDAO();
  }

  async getAllPets() {
    return await this.petsDAO.getAll();
  }

  async getPetById(id) {
    return await this.petsDAO.getById(id);
  }

  async createPet(data) {
    return await this.petsDAO.create(data);
  }

  async updatePet(id, data) {
    return await this.petsDAO.update(id, data);
  }

  async deletePet(id) {
    return await this.petsDAO.delete(id);
  }
}

export default PetsService;
