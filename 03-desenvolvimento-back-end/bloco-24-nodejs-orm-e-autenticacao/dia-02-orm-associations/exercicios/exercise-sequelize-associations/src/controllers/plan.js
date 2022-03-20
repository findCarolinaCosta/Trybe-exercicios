const Plan = require("../services/plan");

module.exports = {
  getInfoByPlanId: async (req, res, next) => {
    try {
      const infos = await Plan.getInfoByPlanId(req.params.id);

      if (!infos) return res.status(404).json({ error: 'Plan not found' })

      return res.status(200).json(infos);
    } catch (error) {
      next(error);
    }
  },
};
