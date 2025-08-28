import { useState } from "react";

function ListaDinamicaComponent() {
  const [nombres, setNombres] = useState<string[]>([
    "Clara",
    "Catalina",
    "Carolina",
  ]);
  const [nuevoNombre, setNuevoNombre] = useState<string>("");

  const agregarNombre = (e: React.FormEvent) => {
    e.preventDefault();
    if (nuevoNombre.trim() !== "") {
      setNombres([...nombres, nuevoNombre]);
      setNuevoNombre("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoNombre(e.target.value);
  };

  return (
    <div>
      <h1>Nombres de bebés</h1>
      <form onSubmit={agregarNombre}>
        <label>Nombres de bebés</label>
        <input
          type="text"
          placeholder="Ingrese un nombre de bebé"
          className="form-control"
          value={nuevoNombre}
          onChange={handleInputChange}
        ></input>
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>

      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDinamicaComponent;
