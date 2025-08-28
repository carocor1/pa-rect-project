// on sumit para manejar un envio de un formulario,

import { useState } from "react";

// manejar cambio para el envio de denominacio de la marca
function Marca() {
  const [marca, setMarca] = useState({
    denominacion: "",
    observacion: "",
  });
  const manejarEnvioDeFormulario = () => {
    console.log("envio de formulario");
  };

  //completar funcionalidad agregando useState. Falta interfaz.
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    //cambia sólo la propiedad que cambia
    setMarca((prevMarca) => ({ ...prevMarca, [name]: value }));
    console.log("cambio");
  };

  return (
    <div>
      <h2>Registro de marca</h2>
      <form onSubmit={() => manejarEnvioDeFormulario()}>
        <div>
          <label>Denominación de la marca</label>
          <input
            type="text"
            name="denominacion" //aca le estamos mandando el centro.
            id="denominacion"
            value={marca.denominacion}
            onChange={manejarCambio}
            placeholder="Denominacion de la marca"
          />
        </div>
        <div>
          <label>Observaciones de la marca</label>
          <input
            type="text"
            name="observacion"
            id="observacion"
            value={marca.observacion}
            onChange={manejarCambio}
            placeholder="Observacion de la marca"
          />
        </div>
      </form>
    </div>
  );
}

export default Marca;
