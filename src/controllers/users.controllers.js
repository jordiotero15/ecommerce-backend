import usersManager from "../data/managers/users.fs.js";

class UserControllers {
  constructor() { }

  async readUsers(req, res, next) {
    try {
      const { role } = req.query;
      const data = await usersManager.readAll(role);
      if (data.length > 0) {
        return res.status(200).json({ data, message: "users fetched" });
      } else {
        const error = new Error("Users not found");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      return next(error);
    }
  }

  async readOneUser(req, res, next) {
    try {
      const { uid } = req.params;

      if (!uid) {
        return res.status(400).json({ message: "User ID is required" });
      }

      const user = await usersManager.readOne(uid);

      return res.status(200).json({ user, message: "User fetched" });
    } catch (error) {
      return next(error);
    }
  }


  async createUser(req, res, next) {
    try {
      const data = req.body;
      const { email, password } = data;
      if (!email || !password) {
        const error = new Error("Email and password are required!");
        error.statusCode = 400;
        throw error;
      }
      const userId = await usersManager.create(data);
      return res
        .status(201)
        .json({ message: `User created successfully, your id is ${userId}` });
    } catch (error) {
      return next(error);
    }
  }

  async updateUser(req, res, next) {
    try {
      const { uid } = req.params;
      const { email, password, photo, role } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required!" });
      }
      const data = {
        email,
        password,
        photo: photo || "default-photo-url.jpg",
        role: role || "user"
      };

      const updatedUser = await usersManager.update(uid, data);

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found or no changes made" });
      }

      return res.status(200).json({ message: "User updated", updatedUser });
    } catch (error) {
      return next(error);
    }
  }



}

const userController = new UserControllers();

export default userController;
