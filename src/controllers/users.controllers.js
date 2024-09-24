import usersManager from "../data/managers/users.fs.js";

class UserControllers {
  constructor() {}

  async readUsers(req, res) {
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
      console.log(error);
      return res
        .status(error.statusCode || 500)
        .json({ message: error.message || "API Error" });
    }
  }

  async createUser(req, res) {
    try {
      const data = req.body;
      const { email, password } = data;
      if (!email || !password) {
        const error = new Error("Email and password are required");
        error.statusCode = 400;
        throw error;
      }
      const userId = await usersManager.create(data);
      return res
        .status(201)
        .json({ message: `User created with id ${userId}` });
    } catch (error) {
      console.log(error);
      return res
        .status(error.statusCode || 500)
        .json({ message: error.message || "API Error" });
    }
  }
}

const userController = new UserControllers();

export default userController;
