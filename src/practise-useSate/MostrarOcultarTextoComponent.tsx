import { useState } from "react";

function MostrarOcultarTextoComponent() {
  const [mostrarTexto, setMostrarTexto] = useState(true);
  const mostrarOcultarText = () => {
    setMostrarTexto(!mostrarTexto);
  };
  return (
    <div>
      {mostrarTexto && <h1>Hola, me estas viendo!</h1>}
      <button className="btn btn-primary" onClick={() => mostrarOcultarText()}>
        Mostrar/Ocultar
      </button>
    </div>
  );
}

export default MostrarOcultarTextoComponent;
