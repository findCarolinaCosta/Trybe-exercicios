import React from 'react'
import Display from './Display';
import GetFavoriteAnimal from './GetFavoriteAnimal';
import GetName from './GetName';

function ShowFavoriteAnimal() {
    return (
      <>
        <h1>Exercício 2.3:</h1>
        <form>
          <GetName />
          <GetFavoriteAnimal  />
          <Display />
        </form>
      </>
    )
}

export default ShowFavoriteAnimal;