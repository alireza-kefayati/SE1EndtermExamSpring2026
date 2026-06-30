class Subscription {
  constructor({ id, userId, planId, startDate, endDate, status }) {
    this.id = id;
    this.userId = userId;
    this.planId = planId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status; // 'active' | 'expired' | 'cancelled'
  }
}

module.exports = Subscription;
