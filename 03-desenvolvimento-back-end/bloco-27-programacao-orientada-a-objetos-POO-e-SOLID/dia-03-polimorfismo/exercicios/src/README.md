# `Interface`: Enrollable

### `Attributes`:

        - enrollment: identificador único da matrícula
  
### `Methods`:

        - generateEnrollment: retorna uma string única gerada como matrícula


# `Class`: Student

### `Extends`: Person

### `Implements`: Enrollable

### `Attributes`:

        - examsGrades: notas de provas
        - worksGrades: notas de trabalhos
  
### `Methods`:

        - Getters/Setters
        - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
        - sumGrades: retorna a soma das notas da pessoa estudante
        - sumAverageGrade: retorna a média das notas da pessoa estudante
  
### `Validations`:

        - A matrícula deve possuir no mínimo 16 caracteres
        - A pessoa estudante deve possuir no máximo 4 notas de provas
        - A pessoa estudante deve possuir no máximo 2 nostas de trabalhos


# `Class`: Employee

### `Extends`: Person

### `Implements`: Enrollable

### `Attributes`:

    - salary: valor do salário
    - admissionDate: data de admissão

### `Methods`:

    - Getters/Setters
    - constructor: deve receber como parâmetro nome, data de nascimento, salário e preencher a matrícula automaticamente

### `Validations`:

    - A matrícula deve possuir no mínimo 16 caracteres
    - O salário não pode ser negativo.
    - A data de admissão não pode ser no futuro

# `Class`: Teacher

### `Extends`: Employee

### `Attributes`:

    - subject: a disciplina lecionada pela pessoa professora

### `Methods`:

    - Getters/Setters
    - constructor: deve receber como parâmetro nome, data de nascimento, salário e a disciplina

### `Validations`:

    - A matrícula deve possuir no mínimo 16 caracteres
    - O salário não pode ser negativo.
    - A data de admissão não pode ser no futuro

# `Class`: Evaluation

### `Attributes`:

    - score: nota da avaliação
    - teacher: pessoa professora
    - type: tipo da avaliação

### `Methods`:

    - Getters/Setters
    - constructor: deve receber como parâmetro a pontuação, a pessoa professora e o tipo

### `Validations`:

    - O tipo da avaliação aceita os seguintes valores: "prova" e "trabalho"
    - A pontuação não pode ser negativa
    - A pontuação caso a avaliação seja do tipo "prova" não pode passar de 25 pontos
    - A pontuação caso seja do tipo "trabalho" não pode passar de 50 pontos

# `Class`: EvaluationResult

### `Attributes`:

    - evaluation: a avaliação
    - score: a nota da pessoa estudante

### `Methods`:

    - Getters/Setters
    - constructor: deve receber como parâmetro a avaliação e a nota da pessoa estudante

### `Validations`:

    - A pontuação não pode ser negativa
    - A pontuação não pode ser maior que a pontuação da avaliação.

# `Class`: Student (Refatoração)

### `Extends`: Person

### `Implements`: Enrollable

### `Attributes`:

    - evaluationsResults: lista de resultados de avaliações

### `Methods`:

    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
    - sumGrades: retorna a soma das notas da pessoa estudante
    - sumAverageGrades: retorna a média das notas da pessoa estudante
    - addEvaluationResult: adiciona um novo resultado de avaliação a lista

### `Validations`:

    - A matrícula deve possuir no mínimo 16 caracteres


# `Abstract Class`: Evaluation

### `Attributes`:

    - score: nota da avaliação
    - teacher: pessoa professora

### `Methods`:

    - Getters/Setters
    - constructor: deve receber como parâmetro a pontuação, a pessoa professora

### `Validations`:

    - A pontuação não pode ser negativa

# `Class`: Exam

### `Extends`: Evaluation

### `Methods`:

    - Getters/Setters
    - constructor: deve receber como parâmetro a pontuação, a pessoa professora

### `Validations`:

    - A pontuação não pode ser negativa
    - A pontuação não pode passar de 25 pontos


# `Class`: Work

### `Extends`: Evaluation

### `Methods`:

    - Getters/Setters
    - constructor: deve receber como parâmetro a pontuação, a pessoa professora

### `Validations`:

    - A pontuação não pode ser negativa
    - A pontuação não pode passar de 50 pontos


# `Class`: OrderItem

### `Attributes`:

    - name: nome do produto
    - price: preco do produto

### `Methods`:

    - Getters/Setters
    - constructor: deve receber como parâmetro o nome do produto e o preço.

### `Validations`:

    - O nome do produto deve conter pelo menos 3 caracteres
    - O preço não pode ser negativo


# `Class`: Order

### `Attributes`:

    - client: pessoa cliente
    - items: os itens consumidos
    - paymentMethod: a forma de pagamento (ex: “cartão”, “dinheiro”)
    - discount: o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), 
      o pedido pode ou não possuir desconto

### `Methods`:

    - Getters/Setters
    - constructor: deve receber como parâmetro a pessoa cliente, os itens do pedido, a forma de pagamento, 
      e o disconto caso exista
    - calculateTotal: retorna o valor total do pedido
    - calculateTotalWithDiscount: retorna o valor total do pedido aplicando o desconto.

### `Validations`:

    - A pessoa cliente deve ser uma instância da nossa classe pessoa
    - O pedido deve ter pelo menos um item
    - A forma de pagamento só pode ser uma dessas três: "dinheiro", "cartão", "vale"
    - O disconto não pode ser negativo


# `Class`: OrderRepository

### `Attributes`:
    - orders: lista de pedidos

### `Methods`:

    - addOrder: recebe um pedido por parâmetro e adiciona a lista
    - removeOrder: recebe um pedido por parâmetro e o remove da lista
    - listByClient: recebe uma pessoa cliente por parâmetro e devolve todos os pedidos dela
    - listBySortedValue: recebe por parâmetro uma string, podendo ser "maior" ou "menor" e retorna a 
      lista de pedidos ordenada do maior valor para o menor ou vice-versa


# `Class`: Order (Refatoração)

### `Attributes`:

    - id: identificador único do pedido
    - createdAt: data em que o pedido foi criado
    - client: pessoa cliente
    - items: os itens consumidos
    - paymentMethod: a forma de pagamento (ex: “cartão”, “dinheiro”)
    - dicount: o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), 
      o pedido pode ou não possuir desconto

### `Methods`:

    - Getters/Setters
    - constructor: deve receber como parâmetro a pessoa cliente, os itens do pedido, a forma de pagamento, 
      e o disconto caso exista, além disso deve setar o valor para o id e a data de criação do pedido
    - calculateTotal: retorna o valor total do pedido
    - calculateTotalWithDiscount: retorna o valor total do pedido aplicando o desconto.

### `Validations`:

    - O identificador do pedido deve ser um número único gerado aleatóriamente
    - A data do pedido não pode ser no futuro
    - A pessoa cliente deve ser uma instância da nossa classe pessoa
    - O pedido deve ter pelo menos um item
    - A forma de pagamento só pode ser uma dessas três: "dinheiro", "cartão", "vale"
    - O desconto não pode ser negativo