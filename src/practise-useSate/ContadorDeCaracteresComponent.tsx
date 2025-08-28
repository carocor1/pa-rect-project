import { useState } from "react";

function ContadorDeCaracteresComponent() {
  const [contador, setContador] = useState<number>(0);

  const actualizarContador = (e: React.ChangeEvent<HTMLInputElement>) => {
    const observacion = e.target.value;
    setContador(observacion.length);
  };

  return (
    <>
      <div>
        <h1>Contador de caracteres</h1>
        <label>Observacion</label>
        <input
          type="text"
          className="form-control"
          onChange={actualizarContador}
        />
      </div>
      <h1>Cantidad de caracteres: {contador}</h1>
    </>
  );
}
export default ContadorDeCaracteresComponent;
