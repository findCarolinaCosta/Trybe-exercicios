const { Plan, Patient } = require("../models");

module.exports = {
  getInfoByPlanId: async (planId) => {
    const plan = await Plan.findOne({
      where: { planId },
      attributes: ['planId', 'coverage', 'price'], 
    });
  
    if (!plan) return null;
  
    const patients = await Patient.findAll({
      where: { planId },
      attributes: ['patientId', 'fullName'],
    });
  
    return { ...plan.dataValues, patients };
  },
};
