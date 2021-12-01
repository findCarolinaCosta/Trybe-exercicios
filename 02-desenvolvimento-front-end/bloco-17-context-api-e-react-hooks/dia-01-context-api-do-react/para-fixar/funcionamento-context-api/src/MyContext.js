import { createContext } from 'react';

const MyContext = createContext('defaultValue');

export default MyContext;

// Utiliza-se o método createContext do React que fornece um meio de passar dados através da árvore de componentes somente para os 'filhos';