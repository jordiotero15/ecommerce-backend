function isValidDataUser(req, res, next) {
    const { email, password, photo, role } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required!" });
    }

    req.body.photo = photo || "default-photo-url.jpg";
    req.body.role = role || "user"; 

    return next();
}

export default isValidDataUser;
