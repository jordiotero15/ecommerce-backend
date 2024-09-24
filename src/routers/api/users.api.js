import { Router } from "express";
import userController from "../../controllers/users.controllers.js";

const usersRouter = Router();

usersRouter.get("/", userController.readUsers);
usersRouter.post("/", userController.createUser);

export default usersRouter;