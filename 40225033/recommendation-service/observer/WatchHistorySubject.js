// Observer Pattern - Subject: notifies registered observers when a watch event happens
class WatchHistorySubject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notify(event) {
    // TODO: also persist event via WatchHistoryRepository
    for (const observer of this.observers) {
      observer.update(event);
    }
  }
}

module.exports = WatchHistorySubject;
