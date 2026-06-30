// Facade Pattern: single entry point hiding the complexity of
// repository lookup, player creation, and quality selection
const PlayerFactory = require('../factory/PlayerFactory');
const AdaptiveQualityStrategy = require('../strategy/AdaptiveQualityStrategy');

class StreamingFacade {
  constructor(contentRepository, watchHistorySubject) {
    this.contentRepository = contentRepository;
    this.watchHistorySubject = watchHistorySubject;
    this.qualityStrategy = new AdaptiveQualityStrategy();
  }

  play(contentId, deviceId, deviceType, bandwidth) {
    // TODO:
    // 1. const content = this.contentRepository.findById(contentId)
    // 2. const player = PlayerFactory.createPlayer(deviceType)
    // 3. const quality = this.qualityStrategy.selectQuality(bandwidth)
    // 4. player.play()
    // 5. this.watchHistorySubject.notify({ contentId, deviceId })
  }
}

module.exports = StreamingFacade;
