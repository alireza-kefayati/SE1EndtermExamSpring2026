const DatabaseConnection = require('../../shared/db/DatabaseConnection');

class SubscriptionRepository {
  constructor() {
    this.db = DatabaseConnection.getInstance();
  }

  findByUserId(userId) {
    // TODO: query subscriptions table by userId
  }

  save(subscription) {
    // TODO: insert or update subscription record
  }
}

module.exports = SubscriptionRepository;
