const { getAllPatients, createPatient } = require('./patient');
const { getInfoByPlanId } = require('./plan');
const { getSurgeriesByDoctorName } = require('./doctor')

module.exports = {
  getAllPatients,
  getInfoByPlanId,
  createPatient,
  getSurgeriesByDoctorName,
};