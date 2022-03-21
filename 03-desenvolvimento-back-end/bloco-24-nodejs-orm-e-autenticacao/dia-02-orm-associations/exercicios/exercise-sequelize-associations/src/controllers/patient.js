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

const createPatient = async (req, res, next) => {
  try {
    const { body: { fullname, planId } } = req;

    const patient = await createPatient({ fullname, planId});

    if (patient === null) return res.status(422).json({message: "planId doesn't exist"});
  
    if (patient === 'patient already exist') return res.status(422).json({message: patient})
  
    return res.status(201).json(patient);
  } catch (error) {
    return console.log(error);
    // next(error);
  }
}

module.exports = {
  getAllPatients,
  createPatient
}