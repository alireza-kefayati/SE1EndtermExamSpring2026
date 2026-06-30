const QualityStrategy = require('./QualityStrategy');

class AdaptiveQualityStrategy extends QualityStrategy {
  selectQuality(bandwidth) {
    // TODO: pick resolution (240p/480p/720p/1080p) based on bandwidth thresholds
  }
}

module.exports = AdaptiveQualityStrategy;
