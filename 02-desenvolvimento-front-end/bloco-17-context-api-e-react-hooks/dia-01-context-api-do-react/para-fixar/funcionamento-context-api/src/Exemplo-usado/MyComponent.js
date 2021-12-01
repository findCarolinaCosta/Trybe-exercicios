import React from 'react';

import MyContext from './MyContext';
import MyOtherComponent from './MyOtherComponent';

function MyComponent() {
  return (
    <MyContext.Provider value={'Valor passado: qualquer valor JavaScript, como um número, string, array ou objeto'}>
      <MyOtherComponent />
    </MyContext.Provider>
  )
}

export default MyComponent;