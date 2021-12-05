import React, { createContext, useState } from "react";

const Context = createContext();
const { Provider, Consumer } = Context;

function ProviderFavAnimal({ children }) {
const [name, setName] = useState('');
const [animal, setAnimal] = useState('');
const context = {
  name, 
  setName,
  animal, 
  setAnimal
}
  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
}

export { ProviderFavAnimal as Provider, Consumer, Context };