const RecommendationService = require('../service/RecommendationService');

class RecommendationController {
  constructor() {
    this.recommendationService = new RecommendationService();
  }

  // GET /recommendations/:userId
  getRecommendations(req, res) {
    // TODO: call recommendationService.getRecommendations(req.params.userId)
  }
}

module.exports = RecommendationController;
