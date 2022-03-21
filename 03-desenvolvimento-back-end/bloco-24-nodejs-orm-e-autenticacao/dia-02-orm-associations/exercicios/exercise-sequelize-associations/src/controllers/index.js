const { getAllPatients, createPatient } = require('./patient');
const { getInfoByPlanId } = require('./plan');

module.exports = {
  getAllPatients,
  getInfoByPlanId,
  createPatient,
};