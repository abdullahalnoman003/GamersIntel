require("dotenv").config();

const PORT = process.env.PORT || 3000;

const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ko3ml0a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

module.exports = {
  PORT,
  MONGO_URI,
};
