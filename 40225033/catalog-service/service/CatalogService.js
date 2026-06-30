const ContentRepository = require('../repository/ContentRepository');

class CatalogService {
  constructor() {
    this.contentRepository = new ContentRepository();
  }

  getContentDetails(id) {
    // TODO: return content + episodes if series
  }

  searchContent(query) {
    // TODO: delegate to contentRepository.search(query)
  }

  listByGenre(genreId) {
    // TODO: delegate to contentRepository.findByGenre(genreId)
  }
}

module.exports = CatalogService;
