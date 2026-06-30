// Observer Pattern - Concrete Observer: reacts to watch events to update recommendations
class RecommendationObserver {
  update(event) {
    // TODO: re-compute / update recommendation weights for event.userId based on event.contentId
  }
}

module.exports = RecommendationObserver;
