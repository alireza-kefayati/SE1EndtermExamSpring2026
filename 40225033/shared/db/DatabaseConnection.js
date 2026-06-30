// Singleton Pattern: ensures only one database connection instance is shared
// across all repositories in all services
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    // TODO: open actual connection pool (e.g. pg.Pool, mongoose.connect)
    this.connection = null;
    DatabaseConnection.instance = this;
  }

  static getInstance() {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  query(sql, params) {
    // TODO: delegate to this.connection.query(sql, params)
  }
}

module.exports = DatabaseConnection;
