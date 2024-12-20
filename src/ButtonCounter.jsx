import React, { useState } from "react";
import './ButtonCounter.css'

function ButtonCounter() {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };

  const disminuir = () => {
    setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div className="container_button">
      <h2>Contador: {contador}</h2>
      <button className="btn_incr" onClick={aumentar}>Incrementar</button>
      <button className="btn_dism" onClick={disminuir}>Disminuir</button>
      <button className="btn_rein" onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default ButtonCounter;