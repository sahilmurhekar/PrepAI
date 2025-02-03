const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://neondb_owner:npg_A7SBWNa9bzxh@ep-empty-fog-a716wl7a-pooler.ap-southeast-2.aws.neon.tech/neondb?sslmode=require",
});

client
  .connect()
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error("Connection error:", err))
  .finally(() => client.end());
