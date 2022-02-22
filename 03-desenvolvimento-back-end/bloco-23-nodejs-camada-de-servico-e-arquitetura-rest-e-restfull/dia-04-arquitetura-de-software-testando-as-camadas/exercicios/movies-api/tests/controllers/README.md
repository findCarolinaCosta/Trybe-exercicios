# Testando controllers 

Ao chamar o método create do controller movieController esperamos:
1. Quando o payload informado não é válido:
    - Retornar o código de status 400 - Bad Request ;
    - Retornar a mensagem Dados inválidos.
2. Quando o payload informado é válido:
    - Retornar o código de status 201 - Created ;
    - Retornar a mensagem Filme criado com sucesso!