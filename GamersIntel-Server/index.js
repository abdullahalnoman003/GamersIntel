require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
  },
});

async function run() {
  try {
    const userCollection = client.db("userDB").collection("users");
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USER CREATION AND INFORMATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    app.post("/users", async (req, res) => {
      try {
        const userInfo = req.body;
        const userExist = await userCollection.findOne({
          email: userInfo.email,
        });

        if (userExist) {
          return res.status(200).send({
            message: "User Already Exist",
          });
        }
        const newUser = {
          name: userInfo.name || null,
          email: userInfo.email,
          photoURL: userInfo.photoURL || null,
          gamerTag: userInfo.gamerTag || null,
          bio: userInfo.bio || null,
          favoriteGenres: userInfo.favoriteGenres || null,
          platforms: userInfo.platforms || null,
          country: userInfo.country || null,
          joinDate: userInfo.joinDate || new Date().toISOString(),
          lastLogin: userInfo.joinDate || new Date().toISOString(),
        };
        const result = await userCollection.insertOne(newUser);
        res.status(201).send({
          message: "User created successfully",
        });
      } catch (err) {
        console.error("DB error:", err);
        res.status(500).send({ error: "Failed to save user" });
      }
    });

    app.get("/users", async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Gamers Intel Server is running");
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
