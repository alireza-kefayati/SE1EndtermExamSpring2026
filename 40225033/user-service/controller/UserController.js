const UserService = require('../service/UserService');

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  // POST /register
  register(req, res) {
    // TODO: call userService.registerUser(req.body)
  }

  // POST /login
  login(req, res) {
    // TODO: call userService.authenticateUser(req.body.email, req.body.password)
  }

  // GET /profile/:id
  getProfile(req, res) {
    // TODO: call userService.userRepository.findById(req.params.id)
  }
}

module.exports = UserController;
