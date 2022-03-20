const Patient = require('../services/patient');

const getAllPatients = async (req, res, next) => {
   try {
    const patients = await Patient.getAllPatients(req.query);

    if (!patients)
    return res.status(404).json({ message: 'Nenhum paciente encontrado' });

    return res.status(200).json(patients);
   } catch (error) {
     _next(error);
   }
}

module.exports = {
  getAllPatients,
}