const sendErrorResponse = (res, err) => {
  let { statusCode, message } = err;
  return res.status(statusCode).json({
    message: message,
    status: false,
  });
};

module.exports = { sendErrorResponse };
