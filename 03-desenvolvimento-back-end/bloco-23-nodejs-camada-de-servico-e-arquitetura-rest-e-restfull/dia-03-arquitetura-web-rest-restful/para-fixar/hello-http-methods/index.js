const fetch = require("node-fetch");

require("dotenv").config(); //para usar variáveis ambiente de um projeto nodejs
// Armazenamos o token numa variável
const API_TOKEN = process.env.TOKEN;

const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  // Precisamos adicionar o header `Content-Type` e defini-lo como `application/json`
  "Content-Type": "application/json",
});

// Depois, criamos o body
// Utilizamos o `stringify` para que possamos enviar esse body como JSON
const body = JSON.stringify({
  name: process.env.NAME,
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
});

// Mudar requisição do tipo `POST`
fetch("https://postman-echo.com/post?param1=teste", {
  // Passamos o objeto de headers como parâmetro para o fetch
  headers,
  method: "POST",
  // Adicionamos o body às opções da request
  body,
})
  .then((response) => {
    // Ao receber a resposta, verificamos se correu tudo bem
    if (!response.ok) {
      // Caso não, forçamos a Promise a ser rejeitada
      return Promise.reject(response);
    }

    // Caso esteja tudo OK, lemos o body como JSON
    return response.json();
  })
  .then((data) => {
    // Por fim, escrevemos o body no console
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (a request completou com um status diferente de 2xx)
    // simplesmente logamos o status no console
    if (errorOrResponse.status) {
      return console.error(
        `Request failed with status ${errorOrResponse.status}`
      );
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.error(errorOrResponse);
  });
