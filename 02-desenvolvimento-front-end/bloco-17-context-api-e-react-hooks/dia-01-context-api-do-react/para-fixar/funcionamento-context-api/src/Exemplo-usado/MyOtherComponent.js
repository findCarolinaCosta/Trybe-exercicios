import React from 'react';

import MyContext from './MyContext';

function MyOtherComponent() {
  return (
    <>
      <h1>Esse é outro componente</h1>
      <MyContext.Consumer>
        {(value) => (
          <h2>{value} </h2>
        )}
      </MyContext.Consumer>
    </>
  )
}

export default MyOtherComponent;