import "dotenv/config";
import { connect, model, Schema } from "mongoose";

const options = {
  user: process.env.DB_USER,
  pass: process.env.DB_USER,
  dbName: "para-fixar-mongoose",
};

const URL_BASE = "mongo://localhost:27017/";

connect(process.env.DB_URL || URL_BASE, options);

interface Book {
  title: string;
  author: string;
}

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true },
});

const bookModel = model<Book>("books", bookSchema);
