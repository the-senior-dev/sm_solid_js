class DatabaseHandler {
  constructor() {
    this.db = new MongoDB(); // Direct dependency on MongoDB, a low-level module
  }

  save(data) {
    this.db.save(data);
  }
}

// Refactored with dependency injection
class DatabaseHandler {
  constructor(db = new MongoDB()) {
    // Can receive any db with a 'save' method
    this.db = db;
  }

  save(data) {
    this.db.save(data);
  }
}
