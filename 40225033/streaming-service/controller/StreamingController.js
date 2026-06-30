const StreamingFacade = require('../service/StreamingFacade');
const ContentRepository = require('../../catalog-service/repository/ContentRepository');
const WatchHistorySubject = require('../../recommendation-service/observer/WatchHistorySubject');

class StreamingController {
  constructor() {
    this.streamingFacade = new StreamingFacade(
      new ContentRepository(),
      new WatchHistorySubject()
    );
  }

  // POST /stream/play
  play(req, res) {
    const { contentId, deviceId, deviceType, bandwidth } = req.body;
    // TODO: call this.streamingFacade.play(contentId, deviceId, deviceType, bandwidth)
  }
}

module.exports = StreamingController;
