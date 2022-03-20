const { Router } = require('express');
const Controller = require('../controllers');

const router = Router();

router
  .get('/', Controller.getAllPatients);

module.exports = router;