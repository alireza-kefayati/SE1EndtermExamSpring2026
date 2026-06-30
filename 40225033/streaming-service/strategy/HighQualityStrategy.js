const QualityStrategy = require('./QualityStrategy');

class HighQualityStrategy extends QualityStrategy {
  selectQuality(bandwidth) {
    // TODO: always return the highest available quality regardless of bandwidth
  }
}

module.exports = HighQualityStrategy;
