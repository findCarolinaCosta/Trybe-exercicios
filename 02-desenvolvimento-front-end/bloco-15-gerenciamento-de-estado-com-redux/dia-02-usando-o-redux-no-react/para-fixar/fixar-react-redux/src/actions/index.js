export const NEW_ACTION = (state) => ({ type: 'NEW_ACTION', state });

// Nossa action , por convenção, deve ser um objeto. Esse objeto pode possuir apenas a key type ou mais outras keys, caso seja conveniente. Note que, no caso abaixo, criamos também uma key state , que guardará o valor recebido pela action.
// A action possui sempre uma propriedade type única. Essa propriedade é utilizada pelo Redux para identificar a ação que será realizada, esse conceito recebe o nome de action type .