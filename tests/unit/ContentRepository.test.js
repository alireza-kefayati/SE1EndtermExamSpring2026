const ContentRepository = require('../../STUDENT_ID/catalog-service/repository/ContentRepository');

describe('ContentRepository', () => {
  let repository;

  beforeEach(() => {
    repository = new ContentRepository();
    // Mock the underlying db so tests don't need a real connection
    repository.db = {
      query: jest.fn().mockResolvedValue([
        { id: '1', title: 'Test Movie', releaseYear: 2024 }
      ])
    };
  });

  test('findById returns a content item for a valid id', async () => {
    // NOTE: findById currently has no implementation (TODO).
    // Once implemented, it should call repository.db.query and return a Content.
    const result = repository.findById('1');
    expect(result).toBeUndefined(); // placeholder assertion until method is implemented
  });

  test('findByGenre returns empty result for a non-existent genre', () => {
    const result = repository.findByGenre('non-existent-genre-id');
    expect(result).toBeUndefined(); // placeholder assertion until method is implemented
  });
});
