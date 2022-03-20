const { Patient, Plan, Surgery } = require("../models");

const getAllPatients = async (query) => {
  const patients = await Patient.findAll();

  if (query.includePlans) {
    const patientsPlans = await Patient.findAll({ 
      attributes: ['patientId', 'fullName'],
      include: [
        { model: Plan, as: 'plan' },
      ],
    });
    return patientsPlans;
  }

  if (query.includeSurgeries) {
    const patientsSurgeries = await Patient.findAll({
      attributes: ['patientId', 'fullName'],
      include: [{
        model: Surgery,
        as: 'surgeries',
        through: { attributes: [] },
        attributes: { exclude: query.includeSurgeries !== 'doctor' && 'doctor'  },
      }],
  });
    return patientsSurgeries;
  }

  return patients;
};

module.exports = {
  getAllPatients,
};
