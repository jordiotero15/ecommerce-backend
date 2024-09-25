function isValidDataProduct(req, res, next) {
    const { title, photo, category, price, stock } = req.body;

    if (!title) {
        return res.status(400).json({ message: "Title is required!" });
    }

    req.body.photo = photo || "default-product-img.jpg";
    req.body.category = category || "other";
    req.body.price = price || 1;
    req.body.stock = stock || 1;

    return next();
}

export default isValidDataProduct;