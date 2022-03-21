const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router
  .get('/', Controller.getAllPatients)
  .post('/', Controller.createPatient); // não funciona fullname do req.body chega undefined


module.exports = router;