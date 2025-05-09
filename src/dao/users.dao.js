import UserModel from '../dao/models/User.js';

class UsersDAO {
  async getAll() {
    return await UserModel.find();
  }

  async getById(id) {
    return await UserModel.findById(id);
  }

  async update(id, data) {
    return await UserModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await UserModel.findByIdAndDelete(id);
  }
}

export default UsersDAO;
