import React, { useEffect, useState } from 'react'

function RandomNumber() {
  const [number, setnumber] = useState(1);
  const [isMultiple, setIsMultiple] = useState(false);
  const [renderMenssage, setRenderMenssage] = useState(null)

// intervalos que depende da atualização do número
  useEffect(() => {
    const intervalNumber = setInterval(() => {
      setnumber(Math.floor(Math.random() * 100 + 1));
    }, 10000);

    setIsMultiple(number % 5 === 0 || number % 3 === 0);
    const intervalMultiple = setInterval(() => {
      setIsMultiple(false);
    }, 4000);

    return () => {
      clearInterval(intervalNumber);
      clearInterval(intervalMultiple);
    }
  }, [number]);

// seta a mensagem se número for múltiplo por de 3 ou 5
  useEffect(() => {
    setRenderMenssage(isMultiple && <p>Acerto</p>)
  }, [isMultiple])

  return ( 
    <div>
      <span>{number}</span>
      { renderMenssage }
    </div>
   );
}

export default RandomNumber;