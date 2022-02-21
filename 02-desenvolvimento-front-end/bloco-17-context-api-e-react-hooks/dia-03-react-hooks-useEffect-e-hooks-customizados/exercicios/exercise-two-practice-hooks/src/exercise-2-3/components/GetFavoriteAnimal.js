import React, { useContext } from 'react';
import { Context } from '../context';

function GetFavoriteAnimal() {
  const { animal, setAnimal } = useContext(Context);
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={event => setAnimal(event.target.value)}
      />
    </div>
  )
}

export default GetFavoriteAnimal;
