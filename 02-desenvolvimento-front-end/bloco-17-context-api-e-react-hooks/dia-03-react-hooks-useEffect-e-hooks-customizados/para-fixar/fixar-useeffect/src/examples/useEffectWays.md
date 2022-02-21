# Fixando useEffect

* O hook Effect leva este nome por lidar com os efeitos colaterais que são produzidos na aplicação diante de um evento ou variável que precisa ser observada, seja ele a montagem do componente, a alteração de um estado ou a desmontagem de um componente.
Para que isso aconteça o hook recebe, geralmente, dois parâmetros, que são uma callback e um array:

`useEffect(() => {}, []);`

## A função será executada de acordo com o que especificarmos como segundo parâmetro. Vamos estudar a fundo cada caso:
### Temos uma função e não temos um array:

`useEffect(() => {});`

Esta configuração executará a função toda vez que o componente sofrer qualquer tipo de alteração e renderizar, **repetidas vezes**. `

<hr/>

### Temos uma função e um array vazio:

`useEffect(() => {}, []);`

Similar ao `componentDidMount`, rodando apenas uma vez e na montagem do componente.

<hr/>

### Temos uma função, e um array com um ou mais parâmetros:

`useEffect(() => {}, [variável1, variável2, ... variávelN]);`

Chamadas de parâmetro de dependências, sendo necessário esses parâmetros estarem no estado.
Semelhante ao `componentDidUpdate` e ou `shouldComponentUpdate`, ele será executado sempre que houver mudança em alguma das variáveis especificadas.

<hr/>

### Temos uma função retornando uma outra função, e o segundo parâmetro pode conter um array populado ou não.

`useEffect(() => {
  return () => {}
}, []);`

Este caso é mais específico, pois ele pode agregar a utilização de um dos dois últimos exemplos, o `componentDidMount` ou `componentDidUpdate` dependendo do segundo parâmetro, e a função presente no retorno se comporta como `componentWillUnmount`. Ou seja, quando o componente desmonta a função retornada pelo `useEffect` é executada. Você deve definir essa função sempre que precisar limpar algo criado por seu efeito (como algum _timer_, por exemplo)