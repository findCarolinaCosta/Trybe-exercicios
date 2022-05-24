# Árvore de arquivos:

```
|   .env
|   .env.example
|   .eslintrc.json
|   .gitignore
|   docker-compose.yml
|   package.json
|   tsconfig.json
|
\---src
    |   index.ts
    |   server.ts
    |
    +---controllers
    |       Frame.ts
    |       index.ts
    |       Lens.ts
    |
    +---interfaces
    |       Frame.ts
    |       Lens.ts
    |
    +---models
    |       connection.ts
    |       Frame.ts
    |       index.ts
    |       Lens.ts
    |       MongoModel.ts
    |
    +---routes
    |       Router.ts
    |
    |---services
            Frame.ts
            index.ts
            Lens.ts
```

Para fixar
Interfaces - Agora que você já tem nitidez sobre como construir uma interface usando zod. Suponhamos que você precise fazer uma interface referente a uma editora de livros. Pense sobre como você iria estruturar a interface Livro utilizando o zod. Quais campos seriam pertinentes e quais as validações precisariam ser implementadas?
```
import { z } from 'zod';
const BookSchema = z.object({
  title: z.string({
    required_error: "Color is required"
  }),
  author: z.string(),
});

type IBook = z.infer<typeof BookSchema>;
```

Service - Utilizando-se dos conceitos abordados até aqui, reflita sobre as principais vantagens da criação de uma classe abstrata para Services.
- Possuir métodos padrão "globais" usados nas classes que irão herdar;
- Re-implementar nas classes filhas algum método acrescentando algo, mas mantendo a estrutura do método da classe herdada. (Polimorfismo)

Controller - Neste momento você já viu como construir todas as camadas de uma API REST com Mongoose. Consegue destacar quais as principais diferenças entre o código desenvolvido hoje e a forma como você costumava desenvolver suas APIs?
- Organização
- Escalabilidade
- Manutenibilidade
- Segurança em mexer no código
  


# ⚠ Configurar .env, .env-example contém exemplo das variáveis necessárias ⚠ 