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