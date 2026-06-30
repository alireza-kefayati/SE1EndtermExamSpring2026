class StreamSession {
  constructor({ id, userId, contentId, deviceId, quality, startedAt }) {
    this.id = id;
    this.userId = userId;
    this.contentId = contentId;
    this.deviceId = deviceId;
    this.quality = quality;
    this.startedAt = startedAt;
  }
}

module.exports = StreamSession;
