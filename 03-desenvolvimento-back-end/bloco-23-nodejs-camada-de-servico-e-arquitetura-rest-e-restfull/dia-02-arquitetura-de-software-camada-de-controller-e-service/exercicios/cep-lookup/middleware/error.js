module.exports = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  // if (err.code) {
  //   return res.status(400).json(err.message);
  // }

  console.log(err);
  return res.status(500).json({ message: "Internal Server Error" });
};
