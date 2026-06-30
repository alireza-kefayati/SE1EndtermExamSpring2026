// Device entity - a device registered by a user (web, mobile, tv)
class Device {
  constructor({ id, userId, deviceType, lastActive }) {
    this.id = id;
    this.userId = userId;
    this.deviceType = deviceType; // 'web' | 'mobile' | 'tv'
    this.lastActive = lastActive;
  }
}

module.exports = Device;
