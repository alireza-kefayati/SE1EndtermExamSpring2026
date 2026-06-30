const DatabaseConnection = require('../../shared/db/DatabaseConnection');

class WatchHistoryRepository {
  constructor() {
    this.db = DatabaseConnection.getInstance();
  }

  save(entry) {
    // TODO: insert watch history record
  }

  findByUserId(userId) {
    // TODO: query watch history table by userId
  }
}

module.exports = WatchHistoryRepository;
