import usersManager from "../data/managers/users.manager.fs.js";


async function isValidDataUser(req, res, next) {
    const { email, password, photo, role } = req.body;

    try {
        if (!email || typeof email !== "string") {
            return res.status(400).json({ message: "Email is required and must be a string" });
        }

        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        const allUsers = await usersManager.readAll();
        const emailExists = allUsers.some((user) => user.email.toLowerCase() === email.toLowerCase());

        if (emailExists) {
            return res.status(400).json({ message: "Error, a user with this email already exists" });
        }

        if (photo !== undefined && typeof photo !== "string") {
            return res.status(400).json({ message: "Error, photo must be a string" });
        }

        if (role !== undefined && role !== "admin" && role !== "user") {
            return res.status(400).json({ message: "Error, role must be either 'admin' or 'user'" });
        }

        req.body.photo = photo || "default-photo-url.jpg";
        req.body.role = role || "user";

        return next();
    } catch (error) {
        return next(error);
    }
}

export default isValidDataUser;
