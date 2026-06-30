class WatchHistory {
  constructor({ id, userId, contentId, resumePosition, watchedAt }) {
    this.id = id;
    this.userId = userId;
    this.contentId = contentId;
    this.resumePosition = resumePosition;
    this.watchedAt = watchedAt;
  }
}

module.exports = WatchHistory;
