// Provider é responsável por "prover" os dados para os componentes que estão nos níveis abaixo dele na árvore de componentes. Ele aceita uma prop obrigatória value com os dados que serão compartilhados. Esse valor pode ser qualquer valor JavaScript, como um número, string, array ou objeto.

/* <MyContext.Provider value={algum valor compartilhado}>
  <MyComponent>
    <MyOtherComponent>
      ...
    </MyOtherComponent>
  <MyComponent>
</MyContext.Provider> 
*/


// Caso não seja encontrado um provider , o valor do contexto utilizado será o valor passado para createContext quando o contexto foi criado
//exemplo 2

/* <MyContext.Provider value={1000000}> valor recebido se ouver Provider = value
  <MyComponent>
    <MyOtherComponent>
      ...
    </MyOtherComponent>
  <MyComponent>
</MyContext.Provider>

function MyComponent() {
  return (
    <MyContext.Consumer>
      {(value) => {  value = 1000000 
         renderiza algo utilizando o valor recebido do contexto
      }}
    </MyContext.Consumer>
  )
} */

//exemplo 3
/* Não existe mais o Provider nessa árvore
<MyComponent>
  <MyOtherComponent>
    ...
  </MyOtherComponent>
<MyComponent>

function MyComponent() {
  return (
    <MyContext.Consumer>
      {(value) => {  value = 1  |o valor recebido será 1|.
         renderiza algo utilizando o valor recebido do contexto 
      }}
    </MyContext.Consumer>
  )
} */