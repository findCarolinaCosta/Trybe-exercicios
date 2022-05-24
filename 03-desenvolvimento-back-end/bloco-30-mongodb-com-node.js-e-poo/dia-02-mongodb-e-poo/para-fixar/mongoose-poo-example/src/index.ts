import "dotenv/config";
import { FrameController } from "./controllers/Frame";
import { LensController } from "./controllers/Lens";
import IFrame from "./interfaces/IFrame";
import ILens from "./interfaces/ILens";
import CustomRouter from "./routes/Router";
import { App } from "./server";

const server = new App();

const lensController = new LensController();
const frameController = new FrameController();

const lensRouter = new CustomRouter<ILens>();
lensRouter.addRoute(lensController);

const frameRouter = new CustomRouter<IFrame>();
frameRouter.addRoute(frameController);

server.addRouter(lensRouter.router);
server.addRouter(frameRouter.router);

server.startServer();
