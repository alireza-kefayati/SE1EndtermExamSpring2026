const WatchHistoryRepository = require('../repository/WatchHistoryRepository');

class RecommendationService {
  constructor() {
    this.watchHistoryRepository = new WatchHistoryRepository();
  }

  getRecommendations(userId) {
    // TODO: use watch history + genre similarity to build a recommendation list
  }
}

module.exports = RecommendationService;
