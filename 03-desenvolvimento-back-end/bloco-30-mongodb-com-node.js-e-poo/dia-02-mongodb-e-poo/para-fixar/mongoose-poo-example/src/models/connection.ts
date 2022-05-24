import "dotenv/config";
import mongoose from "mongoose";

export const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI || ""
) => mongoose.connect(mongoDatabaseURI);
