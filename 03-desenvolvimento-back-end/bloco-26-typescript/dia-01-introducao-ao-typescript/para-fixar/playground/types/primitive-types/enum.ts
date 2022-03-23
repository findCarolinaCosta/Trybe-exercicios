// enum é um nome simbólico para um conjunto de valores relacionados
// padrão uma enum é baseada em números que inicia no zero  e para cada opção é assinalado um número incrementado por 1 , assim como os índices de um array
// Active é 0, Inactive é 1 e Paused é 2
enum StudentStatus {
  Active = 1, // atribuir número 1 para termos a nossa enum refletindo os valores que temos no banco de dados externo 
  Inactive,
  Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 2

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest

// diferentes tipos, sendo o tipo string o mais comum
enum directionsGamePad {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGTH = "RIGHT",
}

console.log(directionsGamePad);


// Exercícios
// Crie uma Enum que represente os dias da semana . Seu valor deve ser número do dia

enum daysWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  friday,
  Saturday,
  Sunday,
}

// Crie uma Enum que represente as cores do arco iris . Seu valor deve ser o nome das cores em português.
enum rainbowColors {
  Red = "Vermelho",
  Orange = "Laranja",
  Yellow = "Amarelo",
  Green = "Verde",
  Blue = "Azul",
  Indigo = "Anil (ou índigo)",
  Violet = "Violeta",
}

// Crie uma Enum que represente as ações: salvar , imprimir , abrir , visualizar e fechar . Seu valor deve ser do tipo inteiro.
enum actions {
  Save,
  Print,
  Open,
  View,
  Close,
}

// Crie uma Enum que represente os pontos cardeais: Norte , Leste , Sul e Oeste . Seu valor deve ser a primeira letra do nome do ponto cardial.
enum cardinalPoints {
  North = "N",
  East = "E",
  South = "S",
  West = "W",
}

let table: any = {};

function Info (key: any, info: any): any {
  return key = info;
}


table.daysWeek = Info(daysWeek, daysWeek[1])
table.rainbowColors = Info(rainbowColors, rainbowColors['Red'])
table.actions = Info(actions, actions['Save'])
table.cardinalPoints = Info(cardinalPoints, cardinalPoints['South'])

console.table({'log-exercise': table});
