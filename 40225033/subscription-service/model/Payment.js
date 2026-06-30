class Payment {
  constructor({ id, subscriptionId, amount, method, paidAt }) {
    this.id = id;
    this.subscriptionId = subscriptionId;
    this.amount = amount;
    this.method = method;
    this.paidAt = paidAt;
  }
}

module.exports = Payment;
