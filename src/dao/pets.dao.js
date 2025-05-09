import PetModel from './models/Pet.js';

class PetsDAO {
  async getAll() {
    return await PetModel.find();
  }

  async getById(id) {
    return await PetModel.findById(id);
  }

  async create(data) {
    return await PetModel.create(data);
  }

  async update(id, data) {
    return await PetModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await PetModel.findByIdAndDelete(id);
  }
}

export default PetsDAO;
