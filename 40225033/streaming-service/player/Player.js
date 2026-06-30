// Player interface - all device players must implement this
class Player {
  play() {
    throw new Error('play() must be implemented by subclass');
  }

  pause() {
    throw new Error('pause() must be implemented by subclass');
  }

  resume() {
    throw new Error('resume() must be implemented by subclass');
  }
}

module.exports = Player;
