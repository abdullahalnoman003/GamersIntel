require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ko3ml0a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-xxxx-shard-00-00.mongodb.net:27017,ac-xxxx-shard-00-01.mongodb.net:27017,ac-xxxx-shard-00-02.mongodb.net:27017/?ssl=true&replicaSet=atlas-xxxx-shard-0&authSource=admin&retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

  } finally {
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("GameStack is running");
});

app.get('/health', async (req, res) => {
    try {
        await client.db("admin").command({ ping: 1 });
        res.json({ status: 'healthy', database: 'connected' });
    } catch (error) {
        res.status(503).json({ status: 'unhealthy', database: 'disconnected', error: error.message });
    }
});

app.listen(port, () =>{
    console.log(`server is running at port ${port}`);
});