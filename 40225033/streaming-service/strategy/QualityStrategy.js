// Strategy Pattern: interface for quality selection algorithms
class QualityStrategy {
  selectQuality(bandwidth) {
    throw new Error('selectQuality() must be implemented by subclass');
  }
}

module.exports = QualityStrategy;
