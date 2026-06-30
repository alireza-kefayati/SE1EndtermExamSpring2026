const SubscriptionService = require('../service/SubscriptionService');

class SubscriptionController {
  constructor() {
    this.subscriptionService = new SubscriptionService();
  }

  // POST /subscribe
  subscribe(req, res) {
    // TODO: call subscriptionService.subscribe(req.body.userId, req.body.planId)
  }

  // POST /renew
  renew(req, res) {
    // TODO: call subscriptionService.renewSubscription(req.body.subscriptionId)
  }
}

module.exports = SubscriptionController;
