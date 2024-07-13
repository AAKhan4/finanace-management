const { MongoClient } = require('mongodb');

let db;

async function connectToDatabase(uri) {
  if (db) return db;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  db = client.db();
  return db;
}

async function closeDatabaseConnection() {
  if (!db) return;

  await db.client.close();
  db = null;
}

module.exports = {
  connectToDatabase,
  closeDatabaseConnection,
};
