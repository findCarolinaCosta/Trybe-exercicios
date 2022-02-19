const getIsValidInfos = (req, res, next) => {
  const { firstName, middleName, lastName } = req.body;

  if (!firstName || typeof firstName !== "string") {
    return res
      .status(400)
      .json({ message: "First name required and must be string" });
  }

  if (!lastName || typeof lastName !== "string") {
    return res
      .status(400)
      .json({ message: "Last name required and must be string" });
  }

  if (middleName && typeof middleName !== "string") {
    return res.status(400).json({ message: "Middle name must be string" });
  }

  return next();
};

module.exports = {
  getIsValidInfos,
};
