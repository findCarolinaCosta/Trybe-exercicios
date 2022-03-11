const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");

const server = require("../api/app");

const { User } = require("../models");
const { User: userMock } = require("./mock/models");
const userDBFake = require('./mock/models/Users.json');

chai.use(chaiHttp);

const { expect } = chai;

describe("Rota GET /api/users/:id", () => {
  describe('Sucesso em fazer requisição com token', () => {
    let response;
  before(() => {
    sinon.stub(User, "findOne").callsFake(userMock.findOne);
  });

  after(() => {
    User.findOne.restore();
  });

  it("Efetua login corretamente e retorna token", async () => {
    response = await chai
    .request(server)
    .post("/api/login")
    .send({
      username: userDBFake[0].username,
      password: userDBFake[0].password
    });

  expect(response).to.have.status(200);
  expect(response.body).to.have.property("token");
  });

  it("requisição com token retorna o esperado", async () => {
    const {token} = response.body;
    const userExpect = await chai
      .request(server)
      .get('/api/users/1')
      .set('authorization', token);

    expect(userExpect).to.have.status(200);
    expect(userExpect.body).to.contain(userDBFake[0])
  });
  })
  describe('Falha ao fazer requisição sem token', () => {
    it('Esperado status 400 e message "Token não ' + 
    'encontrado ou informado" ao fazer requisição sem token', async () => {
      const userResponse = await chai
        .request(server)
        .get("/api/users/1");
  
      expect(userResponse).to.have.status(400);
      expect(userResponse.body.message)
        .to.be.equal('Token não encontrado ou informado');
    });
  })
});
