// Repository Pattern: isolates data access for Content
const DatabaseConnection = require('../../shared/db/DatabaseConnection');

class ContentRepository {
  constructor() {
    this.db = DatabaseConnection.getInstance();
  }

  findById(id) {
    // TODO: query content table by id
  }

  findByGenre(genreId) {
    // TODO: query content joined with genre mapping table
  }

  search(query) {
    // TODO: full-text search on title/description
  }
}

module.exports = ContentRepository;
