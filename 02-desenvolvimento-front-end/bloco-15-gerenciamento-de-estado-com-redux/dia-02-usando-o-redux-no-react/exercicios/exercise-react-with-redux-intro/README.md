Esse é um projeto para o conteúdo do bloco 15, sobre Redux com react.

### Antes de iniciar

[Fork do projeto](https://github.com/findCarolinaCosta/exercise-react-with-redux-intro).

- Após o `git clone (url)`
  
- Rode o `npm install`
  
- Rode o `npm start`
### COMEÇANDO OS EXERCÍCIOS

Dica: Use o Redux Devtools para ver o estado da sua aplicação em seu navegador.

#### Exercício 1

- Nesse exercício temos três botões de nomes Red, Yellow e Green. Esses botões devem ao serem clicados, passar um estado para o `Redux` com seus nomes.

- Esse estado irá ser utilizado para carregar a imagem com a luz de semáforo acesa condizente com o nome do botão clicado.

- Nesse exercício toda a store já está pronta, o único arquivo a ser alterado é o arquivo de nome `TrafficSignal.jsx`.

- Utilize **Redux** para armazenar todo o estado da aplicação

---

#### Exercício 2

- Nesse exercício temos três carros com as cores Red, Blue e Yellow. Cada um deles apresenta um botão que ao ser clicado passa um estado para o `Redux` com um booleano.

- Esse estado irá ser utilizado para alterar o CSS com a imagem do carro, para que ele se mova ou não.

- Nesse exercício toda a store já está pronta, o único arquivo a ser alterado é o arquivo de nome `Cars.jsx`.

- Utilize **Redux** para armazenar todo o estado da aplicação.

---

#### Exercício 3

- Nesse exercício utilizaremos os códigos dos exercícios 1 e 2. Aqui vamos juntar (combinar) os reducers dos dois primeiros exercícios, para que eles possam ser carregados juntos na mesma página da aplicação.

- O funcionamento dos dois componentes **DEVE** se manter o mesmo.

- Nesse exercício toda a `store` já está pronta, você precisará criar os arquivos para cada reducer e mover o código do reducer de cada exercício para um arquivo diferente, utilizar o arquivo `redux/index.js` para montar sua `store` e combinar os dois reducers. Além de alterar os componentes `Cars.jsx` e `TrafficSignal.jsx` para receberem seus respectivos reducers.

- Utilize **Redux** para armazenar todo o estado da aplicação.
