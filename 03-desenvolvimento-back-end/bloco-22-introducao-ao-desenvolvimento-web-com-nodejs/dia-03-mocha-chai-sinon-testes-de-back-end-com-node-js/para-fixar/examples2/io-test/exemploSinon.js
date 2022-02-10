const fs = require("fs");
const sinon = require("sinon");

sinon.stub(fs, "readFileSync").returns("Valor a ser retornado");

//O Sinon é uma ferramenta que fornece funções para diversos tipos dos Test Doubles
// O stub é um tipo de Test Double
// Stubs são objetos que podemos utilizar para simular interações com dependências externas ao que estamos testando de fato
