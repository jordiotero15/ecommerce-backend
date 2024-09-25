import { Router } from "express";
import userController from "../../controllers/users.controllers.js";
import isValidDataUser from "../../middlewares/isValidDataUser.mid.js";

const usersRouter = Router();

usersRouter.get("/", userController.readUsers);
usersRouter.get("/:uid", userController.readOneUser);
usersRouter.post("/", isValidDataUser, userController.createUser);
usersRouter.put("/:uid", userController.updateUser);
usersRouter.delete("/:uid", userController.destroyUser);

export default usersRouter;