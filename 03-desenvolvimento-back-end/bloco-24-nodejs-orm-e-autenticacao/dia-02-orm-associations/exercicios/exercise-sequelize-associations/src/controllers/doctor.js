const Doctor = require("../services/doctor");

module.exports = {
  getSurgeriesByDoctorName: async (req, res, next) => {
    try {
      const surgeries = await Doctor.getSurgeriesByDoctorName(req.query.doctor);

      if (!surgeries) return res.status(404).json({ error: 'Name not found' })

      return res.status(200).json(surgeries);
    } catch (error) {
      next(error);
    }
  },
};
