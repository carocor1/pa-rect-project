import { useEffect, useState } from "react";

function ContadorUE() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("El contador se ha actualizado:", contador);
    document.title = `Contador: ${contador}`;
  }, [contador]);

  const aumentarContador = () => {
    setContador(contador + 1);
  };
  const decrementarContador = () => {
    setContador(contador - 1);
  };
  return (
    <div>
      <h1>Contador de uso de efecto</h1>
      <h1>Contador: {contador}</h1>
      <button className="btn btn-primary" onClick={aumentarContador}>
        Aumentar
      </button>
      <button className="btn btn-primary" onClick={decrementarContador}>
        Decrementar
      </button>
    </div>
  );
}

export default ContadorUE;
