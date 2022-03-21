const { Patient, Plan, Surgery } = require("../models");
const Sequelize = require('sequelize');
const config = require('../config/config');
const sequelize = new Sequelize(config.development);

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


const createPatient = async ({ fullname, planId }) => {
  const plan = await Plan.findOne({ where: { planId } });

  if (!plan) return null;

  const [patient, created] = await sequelize.transaction(async (t) => Patient.findOrCreate({
    where: { fullname },
    defaults: {
      planId,
    },
    transaction: t,
  }));

  if (!created) return 'patient already exist';

  return patient;
}

module.exports = {
  getAllPatients,
  createPatient,
};
