module.exports = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  if (err.message) {
    return res.status(400).json({ message: err.message });
  }

  console.log(err);
  return res.status(500).json({ message: "Internal Server Error" });
};
