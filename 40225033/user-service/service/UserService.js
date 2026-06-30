const UserRepository = require('../repository/UserRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  registerUser(data) {
    // TODO: validate input, hash password, save via userRepository
  }

  authenticateUser(email, password) {
    // TODO: find user by email, compare password hash, return token
  }

  registerDevice(userId, deviceInfo) {
    // TODO: create Device record linked to userId
  }
}

module.exports = UserService;
