import "dotenv/config";
import mongoose from "mongoose";

const URL_BASE: string =
  process.env.DB_URL || "mongodb://localhost:27017/para-fixar-mongoose";

export const connection = (mongoDatabaseURI = URL_BASE) =>
  mongoose.connect(mongoDatabaseURI);
