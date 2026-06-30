// Factory Pattern: creates the correct Player implementation per device type
const WebPlayer = require('../player/WebPlayer');
const MobilePlayer = require('../player/MobilePlayer');
const TvPlayer = require('../player/TvPlayer');

class PlayerFactory {
  static createPlayer(deviceType) {
    switch (deviceType) {
      case 'web':
        return new WebPlayer();
      case 'mobile':
        return new MobilePlayer();
      case 'tv':
        return new TvPlayer();
      default:
        throw new Error(`Unsupported device type: ${deviceType}`);
    }
  }
}

module.exports = PlayerFactory;
