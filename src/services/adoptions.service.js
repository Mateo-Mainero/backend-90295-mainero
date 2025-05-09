import AdoptionModel from '../dao/models/Adoption.js';

class AdoptionsService {
  async getAllAdoptions() {
    return await AdoptionModel.find().populate('user').populate('pet');
  }

  async getAdoptionById(id) {
    return await AdoptionModel.findById(id).populate('user').populate('pet');
  }

  async createAdoption(adoptionData) {
    return await AdoptionModel.create(adoptionData);
  }

  async deleteAdoption(id) {
    return await AdoptionModel.findByIdAndDelete(id);
  }
}

export default AdoptionsService;
