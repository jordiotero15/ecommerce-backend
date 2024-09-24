import express from "express";
import router from "./src/routers/index.router.js";
import morgan from "morgan";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import cors from "cors";

try {
  const server = express();

  const port = 8080;

  const ready = () => console.log("Server ready on port" + port);

  server.listen(port, ready);

  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  server.use(morgan("dev"));
  server.use(cors());

  server.use(router);
  server.use(errorHandler);
} catch (error) {
  console.log(error);
}
