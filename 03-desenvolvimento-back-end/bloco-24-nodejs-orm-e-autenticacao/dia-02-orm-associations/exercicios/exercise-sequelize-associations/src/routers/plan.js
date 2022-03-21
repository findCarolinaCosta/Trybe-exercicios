const { Router } = require('express');
const Controller = require('../controllers');

const router = Router();

router
  .get('/:id', Controller.getInfoByPlanId);

module.exports = router;