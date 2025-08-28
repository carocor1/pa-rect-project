import { useState } from "react";

//Incorporar pasando como parámetro 'incrementar', 'decrementar' y 'reiniciar'
function ContadorComponent() {
  const [contador, setContador] = useState(0);
  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  const reiniciarContador = () => {
    setContador(0);
  };

  return (
    <div>
      <h3>Contador {contador}</h3>
      <button onClick={() => aumentarContador()}>AUMENTAR</button>
      <button onClick={() => decrementarContador()}>DECREMENTAR</button>
      <button onClick={() => reiniciarContador()}>REINICIAR</button>
    </div>
  );
}

export default ContadorComponent;
