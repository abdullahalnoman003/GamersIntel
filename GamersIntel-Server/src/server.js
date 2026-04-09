const { PORT } = require("./config/env");
const { client } = require("./config/database");
const { createApp } = require("./app");

const app = createApp();

async function startServer() {
  try {
    // Keeps startup explicit and fails fast if DB config is broken.
    await client.connect();

    app.listen(PORT, () => {
      console.log(`server is running at port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

if (process.env.NODE_ENV !== "test") {
  startServer();
}

module.exports = app;
