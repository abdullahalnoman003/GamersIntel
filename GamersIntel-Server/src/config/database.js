const { MongoClient, ServerApiVersion } = require("mongodb");
const { MONGO_URI } = require("./env");

const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

function getCollections() {
  const db = client.db("GamersIntelDB");

  return {
    userCollection: db.collection("users"),
  };
}

module.exports = {
  client,
  getCollections,
};
