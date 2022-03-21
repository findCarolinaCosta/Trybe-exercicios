const { Surgery, Patient } = require("../models/");
const { Op } = require('sequelize');

module.exports = {
  getSurgeriesByDoctorName: async (doctor) => {
    const doctorInfo = await Surgery.findOne({
      where: { doctor: { [Op.like]: `%${doctor}%` } },
      attributes: ['doctor', 'surgeryId', 'specialty'],
    });
  
    if (!doctorInfo) return null;
  
    const { dataValues: { surgeryId } } = doctorInfo;
  
    const surgeries = await Patient.findAll({
      attributes: ['patientId', 'fullname'],
      include: [{
        where: { surgeryId },
        model: Surgery,
        as: 'surgeries',
        through: { attributes: [] },
        attributes: { exclude: ['doctor', 'specialty', 'surgeryId', 'published', 'updated'] },
      }],  
    });
  
    return { ...doctorInfo.dataValues, surgeries };
  },
};
