const CatalogService = require('../service/CatalogService');

class CatalogController {
  constructor() {
    this.catalogService = new CatalogService();
  }

  // GET /content/:id
  getContent(req, res) {
    // TODO: call catalogService.getContentDetails(req.params.id)
  }

  // GET /content/search?q=
  searchContent(req, res) {
    // TODO: call catalogService.searchContent(req.query.q)
  }
}

module.exports = CatalogController;
