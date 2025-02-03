import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_A7SBWNa9bzxh@ep-empty-fog-a716wl7a-pooler.ap-southeast-2.aws.neon.tech/prep-ai?sslmode=require",
  }
});