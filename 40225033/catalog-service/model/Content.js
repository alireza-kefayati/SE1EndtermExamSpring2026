// Content entity - movie or series
class Content {
  constructor({ id, title, type, releaseYear, description }) {
    this.id = id;
    this.title = title;
    this.type = type; // 'movie' | 'series'
    this.releaseYear = releaseYear;
    this.description = description;
  }
}

module.exports = Content;
