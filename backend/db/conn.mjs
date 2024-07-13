const { MongoClient } = require('mongodb');

let db;

async function connectToDatabase(uri) {
  if (db) return db; // Return the existing connection if already connected

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  db = client.db();
  return db;
}

async function closeDatabaseConnection() {
  if (!db) return; // No connection to close

  await db.client.close();
  db = null;
}

module.exports = {
  connectToDatabase,
  closeDatabaseConnection,
};
