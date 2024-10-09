 import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import socketCb from "./src/routers/index.socket.js";
import router from "./src/routers/index.router.js";
import morgan from "morgan";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import cors from "cors";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import { engine } from "express-handlebars";
import __dirname from "./utils.js";
import path from "path";

try {
  const server = express();

  const port = 8080;

  const ready = () => console.log("Server ready on port " + port);
  const httpServer = createServer(server);
  httpServer.listen(port, ready);

  const socketServer = new Server(httpServer);
  socketServer.on("connection", socketCb);

  server.use("/public", express.static(__dirname + "/public"));

  server.engine("handlebars", engine());
  server.set("view engine", "handlebars");
  server.set("views", path.join(__dirname, "/src/views"));

  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  server.use(morgan("dev"));
  server.use(cors());

  server.use(router);
  server.use(errorHandler);
  server.use(pathHandler);
} catch (error) {
  console.log(error);
}
