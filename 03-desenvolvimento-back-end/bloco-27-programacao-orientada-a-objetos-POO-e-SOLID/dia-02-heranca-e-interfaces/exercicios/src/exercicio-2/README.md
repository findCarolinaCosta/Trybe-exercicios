`Class`: Student
`Extends`: Person
`Attributes`:
    - enrollment: matrícula da pessoa estudante
    - examsGrades: notas de provas
    - worksGrades: notas de trabalhos
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento e 
      preencher a matrícula automaticamente
    - sumNotes: retorna a soma das notas da pessoa estudante
    - sumAverageNotes: retorna a média das notas da pessoa estudante
    - generateEnrollment: retorna uma string única gerada 
      como matrícula para a pessoa estudante
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - A pessoa estudante deve possuir no máximo 4 notas de provas
    - A pessoa estudante deve possuir no máximo 2 nostas de trabalhos