// Repository Pattern: isolates data access logic for User from business logic
const DatabaseConnection = require('../../shared/db/DatabaseConnection');

class UserRepository {
  constructor() {
    this.db = DatabaseConnection.getInstance();
  }

  findById(id) {
    // TODO: query users table by id
  }

  findByEmail(email) {
    // TODO: query users table by email
  }

  save(user) {
    // TODO: insert or update user record
  }
}

module.exports = UserRepository;
