import express, { Router } from "express";
import { connectToDatabase } from "./models/connection";

export class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  public startServer(port = 3001) {
    connectToDatabase();
    const actualPort = process.env.PORT || port;
    return this.app.listen(actualPort, () =>
      console.log("Server is running on PORT: ", actualPort)
    );
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }
}
