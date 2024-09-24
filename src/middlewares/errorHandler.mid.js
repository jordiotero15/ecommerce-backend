function errorHandler(error, req, res, next) {
  const { statusCode, message } = error;
  console.log(error);
  return res
    .status(error.statusCode || 500)
    .json({ message: error.message || "FATAL ERROR" });
}

export default errorHandler;