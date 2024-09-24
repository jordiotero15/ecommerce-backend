function isValidData(req, res, next) {
    try {
        const { title, description, code, price, status, stock , category} = req.body;
        if(!title || !description || !code || !price || !status || !stock || !category){
            const error = new Error("Title, description, code, price, status, stock , category are required");
            error.statusCode = 400;
            throw error;
        } else {
            return next();
        }
    } catch (error) {
        throw error;
    }
}

export default isValidData;