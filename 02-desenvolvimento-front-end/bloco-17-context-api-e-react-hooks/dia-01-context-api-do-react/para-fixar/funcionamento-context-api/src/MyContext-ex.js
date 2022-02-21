import { createContext } from 'react';

const MyContext = createContext(1); //valor passado como parâmetro para createContext será utilizado como o valor padrão do contexto, caso nenhum valor seja especificado ao utilizar o Provider 

export default MyContext;

//createContext retorna um objeto que possui dois componentes como propriedades: Provider e Consumer.