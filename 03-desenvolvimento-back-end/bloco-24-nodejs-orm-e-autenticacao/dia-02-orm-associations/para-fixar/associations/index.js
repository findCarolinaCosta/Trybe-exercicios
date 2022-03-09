const express = require('express');
const bodyParser = require('body-parser');

const { Address, Employee } = require('./src/models');

const { Book, User } = require('./src/models');
const app = express();

app.use(bodyParser.json());
//para diminuir a complexidade 🠖 sem arquitetura MSC
app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await Employee.create({ firstName, lastName, age });

    await Address.create({ city, street, number, employeeId: employee.id });

    return res.status(201).json({ message: 'Cadastrado com sucesso' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // const employee = await Employee.findOne({
    //     where: { id },
          // Eager Loading↴
    //     include: [{
    //       model: Address, as: 'addresses', attributes: { exclude: ['number'] },
    //     }],
    //   });

    const employee = await Employee.findOne({ where: { id } });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    // // Lazy Loading↴
    // if (req.query.includeAddresses === 'true') {
    //   const addresses = await Address.findAll({ where: { employeeId: id } });
    //   return res.status(200).json({ employee, addresses });
    // }

    if (!req.query.includeAddresses) return res.status(200).json(employee);

    const addresses = await employee.getAddresses(); //getter
    return res.status(200).json({ ...employee.dataValues, addresses})
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: { userId: id },
      // Eager Loading↴
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;