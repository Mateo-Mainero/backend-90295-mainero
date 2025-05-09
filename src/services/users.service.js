import UsersDAO from '../dao/users.dao.js';


class UsersService {
  constructor() {
    this.usersDAO = new UsersDAO();
  }

  async getAllUsers() {
    return await this.usersDAO.getAll();
  }

  async getUserById(uid) {
    return await this.usersDAO.getById(uid);
  }

  async updateUser(uid, data) {
    return await this.usersDAO.update(uid, data);
  }

  async deleteUser(uid) {
    return await this.usersDAO.delete(uid);
  }
}

export default UsersService;
