// Episode entity - belongs to a series Content
class Episode {
  constructor({ id, contentId, seasonNo, episodeNo, videoUrl }) {
    this.id = id;
    this.contentId = contentId;
    this.seasonNo = seasonNo;
    this.episodeNo = episodeNo;
    this.videoUrl = videoUrl;
  }
}

module.exports = Episode;
