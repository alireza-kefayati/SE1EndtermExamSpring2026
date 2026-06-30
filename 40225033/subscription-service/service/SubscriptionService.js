const SubscriptionRepository = require('../repository/SubscriptionRepository');

class SubscriptionService {
  constructor() {
    this.subscriptionRepository = new SubscriptionRepository();
  }

  subscribe(userId, planId) {
    // TODO: create new Subscription with status 'active'
  }

  renewSubscription(subscriptionId) {
    // TODO: extend endDate, trigger payment
  }

  processPayment(subscriptionId, amount) {
    // TODO: create Payment record linked to subscriptionId
  }
}

module.exports = SubscriptionService;
