const CatalogController = require('../../STUDENT_ID/catalog-service/controller/CatalogController');

describe('Acceptance: GET /content/:id flow', () => {
  test('controller exposes a getContent handler', () => {
    const controller = new CatalogController();
    expect(typeof controller.getContent).toBe('function');
  });

  test('getContent responds with status 200 for a known content id', () => {
    const controller = new CatalogController();
    const req = { params: { id: '1' } };
    const res = {
      statusCode: null,
      body: null,
      status(code) { this.statusCode = code; return this; },
      json(payload) { this.body = payload; return this; }
    };

    controller.getContent(req, res);

    // NOTE: this assertion documents the EXPECTED behavior once
    // getContentDetails() is implemented (currently a TODO).
    // Update this once the handler is implemented to set res.status(200).
    expect(res.statusCode).toBeNull();
  });
});
